import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 pb-24 bg-linear-to-b from-white to-brand-light/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-navy leading-tight">
            Solusi Servis Elektronik
            <br />
            <span className="text-brand-steel">Terpercaya di Kota Anda</span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl mt-6 mb-10 leading-relaxed max-w-lg">
            Perbaikan TV, kulkas, mesin cuci, dan perangkat elektronik lainnya
            dengan garansi dan harga transparan.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/6281231829437"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-steel hover:bg-brand-steel/90 text-white font-bold py-3.5 px-8 rounded-xl transition duration-300 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Konsultasi via WhatsApp
            </Link>
            <Link
              href="/jasa"
              className="bg-white border-2 border-slate-200 hover:border-brand-steel text-brand-navy px-8 py-3.5 rounded-xl font-bold transition-all active:scale-95 shadow-sm"
            >
              Lihat Daftar Harga
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
