import React from 'react';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';

// [Bloque 5 Blog Hive]
const BlogHiveBlock = () => {
  const articles = [
    {
      title: "De gastos hormigas a ahorros: el pequeño cambio que transforma tu bolsillo",
      url: "https://peakd.com/hive-134237/@nsalinas42/de-gastos-hormigas-a-ahorros-el-pequeno-cambio-que-transforma-tu-bolsillo",
      description: "Aprende a identificar y mitigar esos pequeños consumos diarios que afectan tu salud financiera a largo plazo.",
      tag: "Finanzas"
    },
    {
      title: "Cómo la Generación X puede dominar la Web3 (Parte 3): No entres en pánico",
      url: "https://peakd.com/hive-134237/@nsalinas42/como-la-generacion-x-puede-dominar-la-web3-parte-3-no-entres-en-panico",
      description: "Una guía práctica para navegar la transición tecnológica sin fricciones, adaptada a la experiencia de nuestra generación.",
      tag: "Web3"
    }
  ];

  return (
    <section className="relative w-full bg-[#29283B] py-10 px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-white/5 border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
            >
              {/* Decoración de fondo al hacer hover */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <BookOpen size={80} color="#FFFFFF" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                  {article.tag}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base mb-8 flex-grow">
                  {article.description}
                </p>

                <div className="flex items-center text-white font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Leer artículo en Hive
                  <ArrowRight className="ml-2 w-4 h-4" />
                  <ExternalLink className="ml-2 w-3 h-3 opacity-50" />
                </div>
              </div>
              
              {/* Overlay de brillo en hover para móviles y desktop */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-colors pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHiveBlock;