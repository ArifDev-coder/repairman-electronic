import Link from "next/link";

import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center font-bold">
        <div
          className="grid grid-cols-1
        md:grid-cols-3 gap-12 mb-12"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Syafa Workshop</h2>
            <p className="text-sm text-brand-teal leading-relaxed">
              Solusi Servis Elektronik di Kota Anda
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Navigasi</h3>
            <ul className="flex flex-col gap-2 text-sm text-brand-teal">
              <li className="">
                <Link
                  href="/"
                  className={`hover:text-brand-teal/80 hover:underline`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/jasa"
                  className="hover:text-brand-teal/80 hover:underline"
                >
                  Jasa
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="hover:text-brand-teal/80 hover:underline"
                >
                  Berita
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hubungi Kami</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <MapPin className="inline mr-2 w-4 h-4" /> Jl. Gunung Gansir,
                Dsn. Gesing RT001 RW008, Randupitu, Gempol, Pasuruan, Jawa
                Timur. <p>Sebelah Utara Pabrik Berkat Ganda Sentosa.</p>{" "}
              </li>
              <li>
                <Phone className="inline mr-2 w-4 h-4" /> Whatsapp:{" "}
                <a
                  href="https://wa.me/6281231829437"
                  className="hover:text-brand-teal/60 hover:underline"
                >
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="w-full text-center mt-6 py-2 block text-xs font-semibold border-t-black/40 border-t">
        &copy;{new Date().getFullYear()} Syafa Workshop, All Right Reserved.
      </span>
    </footer>
  );
}
