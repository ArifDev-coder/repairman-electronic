import Link from "next/link";
import { Phone, MapPin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4">Syafa Workshop</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Solusi servis elektronik terpercaya di kota Anda. Perbaikan TV,
              kulkas, mesin cuci, dan perangkat elektronik lainnya.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigasi</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/jasa"
                  className="hover:text-white transition-colors"
                >
                  Jasa
                </Link>
              </li>
              <li>
                <Link
                  href="/pesan"
                  className="hover:text-white transition-colors"
                >
                  Pesan Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="hover:text-white transition-colors"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-white transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Hubungi Kami</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-brand-steel" />
                <span>
                  Jl. Gunung Gangsir, Gesing RT001 RW008, Randupitu, Gempol,
                  Pasuruan, Jawa Timur. Sebelah utara PT Berkat Ganda Sentosa.
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 text-brand-steel" />
                <Link
                  href="https://wa.me/6281231829437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  0812-3182-9437
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Web Developer</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <span>ACHMAD ZAINUL ARIF</span>
              </li>
              <li>
                <Link
                  href="https://wa.me/6282143390839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex gap-3"
                >
                  <Phone className="w-5 h-5 shrink-0 text-brand-steel" />
                  0821-4339-0839
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/ArifDev-coder"
                  className=" flex gap-3"
                >
                  <Github className="w-5 h-5 shrink-0 text-brand-steel" />
                  ArifDev-coder
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/ArifDev-coder"
                  className=" flex gap-3"
                >
                  <Mail className="w-5 h-5 shrink-0 text-brand-steel" />
                  achadzainul67@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Syafa Workshop. Hak cipta
          dilindungi.
        </p>
      </div>
    </footer>
  );
}
