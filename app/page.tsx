import Hero from "@/components/pages/home/hero";
import { CheckCircle2, ShieldCheck,} from "lucide-react";

export default function Home() {
  return (
    <main className="w-full bg-brand-light">
      <Hero />

      {/* HERO SECTION - NO IMAGE VERSION */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          {/* KIRI: TEKS UTAMA */}
          <div className="z-10">
            <span className="inline-block bg-blue-600/10 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Jasa Servis Elektronik #1 di Kota Anda
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#0B2434] leading-[1.1] mb-6">
              Solusi Cepat untuk <br />
              <span className="text-blue-600">Perangkat Elektronik</span> Anda
            </h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-lg">
              Kami memperbaiki TV, Kulkas, Mesin Cuci dan lain lain. Jujur, bergaransi, dan transparan.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-blue-600 hover:bg-[#0B2434] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-200">
                Konsultasi via WhatsApp
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-blue-600 text-[#0B2434] px-8 py-4 rounded-xl font-bold transition-all">
                Daftar Harga Servis
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-[#0B2434] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Teknisi
                Berpengalaman
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" /> Garansi Suku
                Cadang
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
