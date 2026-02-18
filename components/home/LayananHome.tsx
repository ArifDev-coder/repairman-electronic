import { dataLayanan } from "@/data/layanan";
import Link from "next/link";
import Image from "next/image";

export default function LayananHome() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h1 className="font-bold text-3xl text-center mb-8">
          Layanan Unggulan
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dataLayanan.slice(0, 3).map((layanan, index) => (
            <article
              key={index}
              className="bg-brand-navy text-brand-light p-4 rounded-xl transform transition hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative w-full h-64 md:h-52 bg-white rounded-xl overflow-hidden">
                <Image
                  src={layanan.image}
                  fill
                  className="object-cover"
                  alt={layanan.title}
                  placeholder="blur"
                  priority={index === 0}
                />
              </div>

              <div className="mt-4">
                <h3 className="font-bold mb-2 text-lg">{layanan.title}</h3>
                <div className="text-left max-h-20 overflow-hidden text-sm leading-relaxed">
                  <p className="font-medium">{layanan.description}</p>
                </div>
                <Link
                  href="/jasa"
                  className="mt-4 inline-block px-4 py-2 bg-brand-steel hover:bg-brand-steel/90 text-white rounded-lg text-center font-semibold transition transform active:scale-95 active:translate-y-1 shadow-sm active:shadow-2xl"
                  aria-label={`Pesan ${layanan.title}`}
                >
                  Pesan Jasa
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/jasa"
            className="inline-block px-6 py-3 bg-brand-steel text-white rounded-xl text-center font-semibold hover:bg-brand-steel/90 transition transform active:scale-95 active:translate-y-1 shadow-sm active:shadow-2xl"
            aria-label="Temukan lebih banyak layanan"
          >
            Temukan Lebih Banyak.
          </Link>
        </div>
      </div>
    </section>
  );
}
