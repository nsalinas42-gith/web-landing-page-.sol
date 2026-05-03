"use client"

// Bloque 2 Subtítulo
import { useLanguage } from "@/lib/language-context"

export function SubtitleBlock() {
  const { t } = useLanguage()
  
  return (
    <section className="w-full bg-[#29283B] pt-[53px] md:pt-12 pb-8">
      {/* Contenedor centrado con padding para los avatares solapados */}
      <div className="flex items-center justify-center px-4 md:px-8">
        <h2 className="font-sans font-normal text-[#FFFFFF] text-[14px] md:text-[16px] text-center max-w-5xl uppercase">
          {t.subtitle.line1}<br />
          {t.subtitle.line2}
        </h2>
      </div>
    </section>
  )
}
