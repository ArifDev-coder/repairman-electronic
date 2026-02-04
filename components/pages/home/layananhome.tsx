import { dataLayanan } from "@/data/Layanan/dataLayanan";
import Link from "next/link";
import Image from "next/image";

export default function LayananHome() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h1 className="font-bold text-3xl text-center mb-8">Layanan Unggulan</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataLayanan.slice(0, 3).map((layanan, index) => (
            <div key={index} className="bg-brand-navy text-brand-light p-4 rounded-xl">
              <div className="relative w-full h-50 bg-white rounded-xl">
                <Image src={layanan.image} fill className="object-cover" alt={layanan.title} />
              </div>

              <div className="my-4">
                <h1 className="font-bold mb-2">{layanan.title}</h1>
                <i className="leading-0 text-justify">{layanan.description}</i>
              </div>
            </div>
          ))}
        </div>
        <div className="my-4 bg-brand-steel py-2 text-white rounded-xl hover:bg-brand-steel/90">
          <Link href="/jasa">
            Temukan Lebih Banyak.
          </Link>
        </div>
      </div>
    </section>
  );
}
