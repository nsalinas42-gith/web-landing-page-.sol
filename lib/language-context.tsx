"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "es" | "en"

interface Translations {
  hero: {
    title: string
  }
  subtitle: {
    line1: string
    line2: string
  }
  ticker: {
    industrial: string
    financial: string
    amount: string
    cap: string
    operations: string
  }
  language: {
    spanish: string
    english: string
    changeLanguage: string
  }
}

const translations: Record<Language, Translations> = {
  es: {
    hero: {
      title: "Explorando la Nueva Frontera Digital:"
    },
    subtitle: {
      line1: "Como navegar el ecosistema de inversiones",
      line2: "en bolsa, criptomonedas y tecnología blockchain."
    },
    ticker: {
      industrial: "INDUSTRIAL",
      financial: "FINANCIERO",
      amount: "MONTO BS.",
      cap: "CAP. USD",
      operations: "OPERACIONES"
    },
    language: {
      spanish: "Español",
      english: "English",
      changeLanguage: "Cambiar idioma"
    }
  },
  en: {
    hero: {
      title: "Exploring the New Digital Frontier:"
    },
    subtitle: {
      line1: "How to navigate the investment ecosystem",
      line2: "in stock market, cryptocurrencies and blockchain technology."
    },
    ticker: {
      industrial: "INDUSTRIAL",
      financial: "FINANCIAL",
      amount: "AMOUNT BS.",
      cap: "CAP. USD",
      operations: "OPERATIONS"
    },
    language: {
      spanish: "Español",
      english: "English",
      changeLanguage: "Change language"
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
