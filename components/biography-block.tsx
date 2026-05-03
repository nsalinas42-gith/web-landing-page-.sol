"use client"

// Bloque 4 Biografía
import { useLanguage } from "@/lib/language-context"

export function BiographyBlock() {
  const { t } = useLanguage()

  return (
    <section className="w-full bg-white px-[20px] pt-[20px] pb-[40px]">
      {/* Título */}
      <h2 className="font-sans font-normal text-[#000000] text-[40px] text-center mb-[40px]">
        Dev Web | Mobile Content Creator
      </h2>

      {/* Contenido en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Columna Izquierda */}
        <div className="text-[#000000] text-[16px] font-sans leading-relaxed">
          <p className="mb-4">
            {t.biography.intro}
          </p>
          <p className="mb-4">
            {t.biography.passion}
          </p>
          <p className="mb-4">
            {t.biography.web3}
          </p>
          <p className="mb-4">
            {t.biography.experience}
          </p>
          <p className="mb-4">
            {t.biography.growth}
          </p>
          {/* Cita 1 */}
          <blockquote className="border-l-4 border-[#29283B] pl-4 italic font-bold">
            {t.biography.quote1}
          </blockquote>
        </div>

        {/* Columna Derecha */}
        <div className="text-[#000000] text-[16px] font-sans leading-relaxed">
          <p className="mb-4">
            {t.biography.future}
          </p>
          
          <p className="mb-4">
            {t.biography.technology}
          </p>

          {/* Cita 2 */}
          <blockquote className="border-l-4 border-[#29283B] pl-4 mb-4 italic font-bold">
            {t.biography.quote2}
          </blockquote>
          
          <p className="mb-4">
            {t.biography.design}
          </p>
          
          <p className="font-bold">
            {t.biography.believer}
          </p>
        </div>
      </div>
    </section>
  )
}
