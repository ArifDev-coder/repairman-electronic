import Image from "next/image";
import { Star } from "lucide-react";

/*
Langkah-langkah bikin Review Card:
1. Bikin <section> dengan padding gede (py-24).
2. Masukin <div> container (max-w-7xl mx-auto).
3. Bikin Judul Tengah (text-center).
4. Bikin <div> Grid (grid md:grid-cols-3 gap-8).
5. Di dalemnya, bikin <div> Card:
   - bg-white, p-8, rounded-2xl, shadow-sm.
   - Kasih 5 icon Bintang (Warna Yellow-400).
   - Kasih <p> kutipan review (italic biar cakep).
   - Kasih <div> buat Nama & Foto di bawah teks.
*/

const clientReview = [
  {
    name: "Client-1",
    review: "Mantap!",
    star: 4,
    profile: "/client_profile/Client-1.jpeg",
  },
  {
    name: "Client-2",
    review: "Tolol emang!",
    star: 1,
    profile: "/client_profile/Client-1.jpeg",
  },
  {
    name: "Client-3",
    review: "Rada-rada",
    star: 3,
    profile: "/client_profile/Client-1.jpeg",
  },
];

export default function Review() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="font-bold text-center text-3xl mb-8">
          Review Pelanggan
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReview.map((client, index) => (
            <article
              key={index}
              role="article"
              aria-label={`Review dari ${client.name}`}
              className="relative bg-brand-navy p-8 rounded-2xl shadow-xl flex flex-col h-full transition-transform transform hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-5 h-5 ${s < client.star ? "text-yellow-400 fill-yellow-400" : "text-slate-500"}`}
                      aria-hidden
                    />
                  ))}
                </div>
                <span className="text-sm text-blue-200 font-medium">
                  {client.star}.0
                </span>
              </div>

              <div className="relative mb-6">
                <div className="text-brand-light italic leading-relaxed text-sm max-h-28 overflow-hidden">
                  &quot;{client.review}&quot;
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={client.profile}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm">
                    {client.name}
                  </span>
                  <span className="text-xs text-blue-300">Pelanggan Setia</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
