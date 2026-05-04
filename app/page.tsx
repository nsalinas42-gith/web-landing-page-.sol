'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  // useChat busca automáticamente la ruta /api/chat que creamos arriba
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'Usuario: ' : 'IA: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Di algo..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

import { HeroBanner } from "@/components/hero-banner"
import { SubtitleBlock } from "@/components/subtitle-block"
import { TickerBVC } from "@/components/ticker-bvc"
import { LanguageSwitcher } from "@/components/language-switcher"
import { BiographyBlock } from "@/components/biography-block"
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
        
        {/* Bloque 4 Biografía */}
        <BiographyBlock />
      </main>
    </LanguageProvider>
  )
}
