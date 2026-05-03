"use client"

// Bloque 1 Hero
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()
  
  return (
    <section className="relative w-full h-[300px] md:h-[80vh]">
      {/* Imagen de fondo */}
      <Image
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
        alt="Hero background - Mountain landscape"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Texto Central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] text-center px-4 drop-shadow-lg">
          {t.hero.title}
        </h1>
      </div>
      
      {/* Foto de Perfil - Lado Izquierdo */}
      <div className="absolute -bottom-[50px] md:-bottom-[90px] left-[10px] md:left-[20px] w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-[2px] md:border-[3px] border-white shadow-lg z-10">
        <Image
          src="/images/profile.png"
          alt="Profile photo"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Avatar - Lado Derecho */}
      <div className="absolute -bottom-[35px] md:-bottom-[50px] right-[10px] md:right-[30px] w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden border-2 border-white shadow-lg z-10">
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
