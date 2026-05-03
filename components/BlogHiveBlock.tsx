import React from 'react';
import { ArrowRight, ExternalLink, Box } from 'lucide-react';

// [Bloque 5 BlogHive]
export default function BlogHiveBlock() {
  const posts = [
    {
      title: "De gastos hormigas a ahorros: el pequeño cambio que transforma tu bolsillo",
      url: "https://peakd.com/hive-134237/@nsalinas42/de-gastos-hormigas-a-ahorros-el-pequeno-cambio-que-transforma-tu-bolsillo",
      category: "Finanzas Personales",
      excerpt: "Descubre cómo pequeños ajustes en tu consumo diario pueden generar un impacto masivo en tu libertad financiera."
    },
    {
      title: "Cómo la Generación X puede dominar la Web3 (Parte 3): No entres en pánico",
      url: "https://peakd.com/hive-134237/@nsalinas42/como-la-generacion-x-puede-dominar-la-web3-parte-3-no-entres-en-panico",
      category: "Web3 & Blockchain",
      excerpt: "Una guía esencial para entender la descentralización sin abrumarse en el proceso tecnológico."
    }
  ];

  return (
    <section className="relative w-full bg-[#1A1926] px-[20px] pt-[40px] pb-[40px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Título Centralizado */}
        <div className="relative mb-12 w-full text-center">
          <h2 className="text-[#FFFFFF] text-[40px] leading-tight font-bold tracking-tight" 
              style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", fontWeight: 700 }}>
            Hive Blockchain
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full opacity-50"></div>
        </div>

        {/* Contenedor de Columnas (Grid Responsivo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-[#29283B] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-[#34334a] hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
            >
              {/* Elemento Decorativo de Fondo */}
              <div className="absolute -right-8 -top-8 text-white/5 group-hover:text-white/10 transition-colors">
                <Box size={160} />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                  {post.category}
                </span>
                
                <h3 className="text-white text-2xl font-bold mb-4 leading-snug group-hover:text-blue-200 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer del Card con Interactividad */}
              <div className="relative z-10 flex items-center justify-between mt-4 pt-6 border-t border-white/10">
                <div className="flex items-center text-white font-medium text-sm">
                  Leer reseña completa
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
                <ExternalLink size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Brillo de borde en Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl pointer-events-none transition-all" />
            </a>
          ))}
        </div>
      </div>

      {/* Estilos para asegurar la fuente si no está cargada globalmente */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
      `}</style>
    </section>
  );
}