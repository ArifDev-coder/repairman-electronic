export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy">
            Solusi Servis Elektronik di Kota Anda <br />
            <span className="text-brand-steel">Perangkat Elektronik</span> Anda
          </h1>

          <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-lg">
            Kami memperbaiki TV, Kulkas, Mesin Cuci dan lain lain.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-brand-steel hover:bg-brand-steel/90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 active:scale-95 active:translate-y-1 shadow-sm active:shadow-inner">
              Konsulasi Via Whatsapp
            </button>
            <button className="bg-white border-2 border-slate-200 hover:border-brand-steel text-brand-navy px-8 py-3 rounded-lg font-bold transition-all active:scale-95 active:translate-y-1 shadow-sm active:shadow-inner">
              Daftar Harga Servis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
