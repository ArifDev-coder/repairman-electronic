import Link from "next/link";

export default function Promotion() {
  return (
    <section className="w-full text-center bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Placeholder for future promotion content */}
        <div>
          <p className="text-xl font-semibold ">Perangkat Anda Rusak? Segera perbaiki di Syafa Workshop!</p>
        </div>
        <div className="text-xl">
          <p>Gratis biaya pengecekan! Bayar hanya jika unit diperbaiki.</p>
        </div>
        <div>
            <Link href="https://wa.me/6281231829437" className="mt-6 px-5 inline-block bg-brand-steel py-3 text-white rounded-xl  font-semibold hover:bg-brand-steel/90 transition duration-300 active:scale-95 active:translate-y-1 shadow-sm active:shadow-inner" target="_blank">
                Hubungi Sekarang.
            </Link>
        </div>
      </div>
    </section>
  );
}