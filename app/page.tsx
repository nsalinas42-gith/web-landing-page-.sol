"use client"

import { HeroBanner } from "@/components/hero-banner"
import { SubtitleBlock } from "@/components/subtitle-block"
import { TickerBVC } from "@/components/ticker-bvc"
import { LanguageSwitcher } from "@/components/language-switcher"
import { LanguageProvider } from "@/lib/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        {/* Language Switcher */}
        <LanguageSwitcher />
        
        {/* Bloque 1 Hero */}
        <HeroBanner />
        
        {/* Bloque 2 Subtítulo */}
        <SubtitleBlock />
        
        {/* Bloque 3 Ticker BVC */}
        <TickerBVC />
      </main>
    </LanguageProvider>
  )
}
