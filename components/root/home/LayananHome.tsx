import { dataLayanan } from "@/data/layanan";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LayananHome() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-brand-navy mb-3">
            Layanan Unggulan Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Servis profesional untuk berbagai jenis perangkat elektronik
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dataLayanan.slice(0, 3).map((layanan, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full h-56 md:h-52 bg-slate-100 overflow-hidden">
                <Image
                  src={layanan.image}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={layanan.title}
                  placeholder="blur"
                  priority={index === 0}
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-brand-navy mb-2">
                  {layanan.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {layanan.description}
                </p>
                <Link
                  href="/jasa"
                  className="inline-flex items-center gap-2 text-brand-steel font-semibold hover:text-brand-navy transition-colors"
                  aria-label={`Lihat detail ${layanan.title}`}
                >
                  Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/jasa"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-steel hover:bg-brand-steel/90 text-white rounded-xl font-semibold transition-all active:scale-95 shadow-lg"
            aria-label="Lihat semua layanan"
          >
            Lihat Semua Layanan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
