import { Target, Compass } from "lucide-react";

export default function VisiMisi() {
  return (
    <section className="w-full py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl bg-linear-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent mb-3">
            Visi & Misi Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Komitmen kami dalam memberikan layanan terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl shadow-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-steel/10 rounded-xl">
                <Compass className="w-6 h-6 text-brand-steel" />
              </div>
              <h3 className="font-bold text-2xl text-brand-navy">Visi</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Menjadi penyedia layanan servis elektronik terpercaya dan terdepan
              di kota kami, dikenal karena kualitas pelayanan, keahlian teknisi,
              dan kepuasan pelanggan yang luar biasa.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-steel/10 rounded-xl">
                <Target className="w-6 h-6 text-brand-steel" />
              </div>
              <h3 className="font-bold text-2xl text-brand-navy">Misi</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-2">
                <span className="text-brand-steel font-bold">•</span>
                Menyediakan layanan servis yang cepat, andal, dan berkualitas
              </li>
              <li className="flex gap-2">
                <span className="text-brand-steel font-bold">•</span>
                Mempekerjakan teknisi berpengalaman dan terupdate dengan
                teknologi terbaru
              </li>
              <li className="flex gap-2">
                <span className="text-brand-steel font-bold">•</span>
                Membangun hubungan jangka panjang dengan pelayanan ramah dan
                profesional
              </li>
              <li className="flex gap-2">
                <span className="text-brand-steel font-bold">•</span>
                Menjaga transparansi harga dan solusi terbaik untuk setiap
                masalah
              </li>
              <li className="flex gap-2">
                <span className="text-brand-steel font-bold">•</span>
                Memberikan garansi atas setiap layanan yang kami berikan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
