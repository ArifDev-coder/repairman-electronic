import { dataLayanan } from "@/data/Layanan/dataLayanan";

export default function LayananHome() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h1 className="font-bold text-3xl text-center mb-8">Layanan Unggulan</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataLayanan.map((layanan, index) => (
            <div key={index} className="bg-brand-navy text-brand-light">
                {layanan.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
