import { dataLayanan } from "@/data/layanan";
import Link from "next/link";
import Image from "next/image";
import { formatRupiah } from "@/lib/utils/formatRupiah";
import { ArrowRight } from "lucide-react";

export default function SemuaLayanan() {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Semua Layanan Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan perangkat Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataLayanan.map((layanan, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={layanan.image}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  alt={layanan.title}
                  placeholder="blur"
                  priority={index < 3}
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-brand-navy mb-2">
                  {layanan.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {layanan.description}
                </p>
                <p className="text-sm font-semibold text-brand-steel mb-4">
                  Estimasi biaya: {formatRupiah(layanan.hargaMin)} –{" "}
                  {formatRupiah(layanan.hargaMax)}
                </p>
                <Link
                  href="/pesan"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-steel hover:bg-brand-steel/90 text-white rounded-xl font-semibold transition-colors"
                  aria-label={`Pesan layanan ${layanan.title}`}
                >
                  Pesan Layanan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
