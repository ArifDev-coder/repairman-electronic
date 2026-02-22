import Link from "next/link";
import { Wrench, MessageCircle } from "lucide-react";

export default function Promotion() {
  return (
    <section className="w-full py-16 md:py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Wrench className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                Perangkat Anda Bermasalah?
              </h2>
              <p className="text-brand-light/90">
                Segera perbaiki di Syafa Workshop!
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-white/90 font-medium">
              Gratis biaya pengecekan — Bayar hanya jika unit diperbaiki
            </p>
            <Link
              href="https://wa.me/6281231829437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors active:scale-95 shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi via WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
