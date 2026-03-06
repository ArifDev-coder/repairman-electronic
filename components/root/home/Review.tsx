import { Star, Quote } from "lucide-react";

const clientReview = [
  {
    name: "Budi Santoso",
    review:
      "Blender saya yang tadinya mati total sekarang jadi seperti baru lagi. Harganya sangat transparan dan pengerjaannya cepat!",
    star: 5,
  },
  {
    name: "Siti Aminah",
    review:
      "Kipas angin di rumah berisik dan putarannya lambat, setelah diservis di sini jadi kencang lagi. Mantap!",
    star: 5,
  },
  {
    name: "Ahmad Wijaya",
    review:
      "Rakitan power ampli-nya mantap, suaranya jernih dan bass-nya nendang. Teknisi sangat paham soal audio.",
    star: 5,
  },
];

export default function Review() {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-brand-navy mb-3">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReview.map((client, index) => (
            <article
              key={index}
              role="article"
              aria-label={`Review dari ${client.name}`}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-full transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-steel/20" />
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-5 h-5 shrink-0 ${
                        s < client.star
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-200"
                      }`}
                      aria-hidden
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-500 font-medium">
                  {client.star}.0
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                &ldquo;{client.review}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-brand-navy text-white font-bold text-lg border-2 border-slate-100">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-brand-navy block">
                    {client.name}
                  </span>
                  <span className="text-xs text-slate-500">Pelanggan Setia</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
