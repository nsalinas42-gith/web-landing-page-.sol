"use client"

// Bloque 3: Ticker BVC
import { useLanguage } from "@/lib/language-context"

export function TickerBVC() {
  const { t } = useLanguage()
  
  return (
    <section className="w-full bg-[#1a1a2e] py-4 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Duplicamos el contenido para crear efecto de loop continuo */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center gap-8 px-4">
            {/* IBC */}
            <div className="flex items-center gap-2">
              <span className="text-[#8b8b9e] text-sm font-medium">IBC</span>
              <span className="text-white font-bold text-lg">6.366,77</span>
              <span className="text-[#4ade80] text-sm">0%</span>
            </div>
            
            <div className="w-px h-6 bg-[#3d3d5c]" />
            
            {/* BVCC */}
            <div className="flex items-center gap-2">
              <span className="text-[#8b8b9e] text-sm font-medium">BVCC</span>
              <span className="text-white font-bold text-lg">18.300</span>
              <span className="text-[#4ade80] text-sm">+0,17%</span>
            </div>
            
            <div className="w-px h-6 bg-[#3d3d5c]" />
            
            {/* Industrial */}
            <div className="flex items-center gap-2">
              <span className="text-[#8b8b9e] text-sm font-medium">{t.ticker.industrial}</span>
              <span className="text-white font-bold text-lg">2.577,41</span>
              <span className="text-[#4ade80] text-sm">0%</span>
            </div>
            
            <div className="w-px h-6 bg-[#3d3d5c]" />
            
            {/* Financiero */}
            <div className="flex items-center gap-2">
              <span className="text-[#8b8b9e] text-sm font-medium">{t.ticker.financial}</span>
              <span className="text-white font-bold text-lg">12.197,27</span>
              <span className="text-[#4ade80] text-sm">0%</span>
            </div>
            
            <div className="w-px h-6 bg-[#3d3d5c]" />
            
            {/* Monto Efectivo */}
            <div className="flex items-center gap-2">
              <span className="text-[#8b8b9e] text-sm font-medium">{t.ticker.amount}</span>
              <span className="text-white font-bold text-lg">44.116.944,53</span>
            </div>
            
            <div className="w-px h-6 bg-[#3d3d5c]" />
            
            {/* Capitalización */}
            <div className="flex items-center gap-2">
              <span className="text-[#8b8b9e] text-sm font-medium">{t.ticker.cap}</span>
              <span className="text-white font-bold text-lg">24,894,340,022.72</span>
            </div>
            
            <div className="w-px h-6 bg-[#3d3d5c]" />
            
            {/* Operaciones */}
            <div className="flex items-center gap-2">
              <span className="text-[#8b8b9e] text-sm font-medium">{t.ticker.operations}</span>
              <span className="text-white font-bold text-lg">1.859</span>
            </div>
            
            <div className="w-[50px]" />
          </div>
        ))}
      </div>
    </section>
  )
}
