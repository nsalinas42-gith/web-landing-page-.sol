import DigitalLedgerBackground from '../components/DigitalLedgerBackground';
import { ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

export default function LandingPage() {
  return (
    <DigitalLedgerBackground>
      <nav className="w-full max-w-7xl flex justify-between items-center p-6">
        <div className="text-[#00C087] font-bold text-2xl tracking-tighter">LEDGER.INV</div>
        <button className="bg-transparent border border-[#2F3336] text-white px-6 py-2 rounded-full hover:bg-[#1B1F24] transition-all">
          Conectar Wallet
        </button>
      </nav>

      <main className="flex flex-col items-center text-center px-4 py-20 max-w-4xl">
        {/* Etiqueta de Accesibilidad */}
        <span className="text-[#00C087] bg-[#00C087]/10 px-3 py-1 rounded-full text-sm font-medium mb-6">
          Web3 Investment Protocol
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          La transparencia de la <span className="text-[#00C087]">Blockchain</span> en tus inversiones.
        </h1>

        <p className="text-[#A1A1A1] text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          Accede a mercados globales con una infraestructura segura, descentralizada y optimizada para la nueva era financiera.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="bg-[#00C087] text-[#0B0E11] font-bold px-10 py-4 rounded-lg text-lg hover:scale-105 transition-transform">
            Invertir Ahora
          </button>
          <button className="bg-white text-[#0B0E11] font-bold px-10 py-4 rounded-lg text-lg hover:bg-gray-200 transition-colors">
            Ver Documentación
          </button>
        </div>

        {/* Sección de Features - Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { icon: <ShieldCheck size={32} />, title: "Seguridad Total", desc: "Contratos inteligentes auditados." },
            { icon: <TrendingUp size={32} />, title: "Rendimiento", desc: "Optimización de gas en cada operación." },
            { icon: <Cpu size={32} />, title: "Web3 Nativo", desc: "Conexión directa con nodos institucionales." }
          ].map((item, index) => (
            <div key={index} className="p-8 bg-[#1B1F24]/50 border border-[#2F3336] rounded-2xl text-left hover:border-[#00C087] transition-colors">
              <div className="text-[#00C087] mb-4">{item.icon}</div>
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#A1A1A1]">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </DigitalLedgerBackground>
  );
}