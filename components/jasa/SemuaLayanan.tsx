import { dataLayanan } from "@/data/layanan";
import Link from "next/link";
import Image from "next/image";
import { formatRupiah } from "@/lib/utils/formatRupiah";

export default function SemuaLayanan() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-8 font-bold">Semua Layanan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dataLayanan.map((layanan, index) => (
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
                  <div className=" max-h-20 overflow-hidden text-sm leading-relaxed">
                    <p className="font-medium">{layanan.description}</p>
                  </div>
                  <div className="font-semibold mt-5 ">
                    <span>
                      Estimasi Biaya Mulai dari{" "}
                      <span className="font-bold">
                        {formatRupiah(layanan.hargaMin)}
                      </span>{" "}
                      s/d{" "}
                      <span className="font-bold">
                        {formatRupiah(layanan.hargaMax)}
                      </span>
                    </span>
                  </div>
                  <Link
                    href="/jasa"
                    className="mt-4 inline-block px-4 py-2 bg-brand-steel hover:bg-brand-steel/90 text-white rounded-lg text-center font-semibold transition transform active:scale-95 active:translate-y-1 shadow-sm active:shadow-2xl"
                    aria-label={`Pesan ${layanan.title}`}
                  >
                    Selengkapnya
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
