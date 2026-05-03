"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const languages = [
  { code: "es" as const, label: "Español" },
  { code: "en" as const, label: "English" },
]

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLang = languages.find(l => l.code === language) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelectLang = (langCode: "es" | "en") => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div 
      ref={dropdownRef}
      className="fixed top-[5px] right-[5px] z-50"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 bg-white/90 hover:bg-white rounded-md shadow-md transition-colors text-sm text-gray-700"
        aria-label={t.language.changeLanguage}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{selectedLang.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden min-w-[100px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLang(lang.code)}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors ${
                language === lang.code ? "bg-gray-50 font-medium text-gray-900" : "text-gray-700"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
