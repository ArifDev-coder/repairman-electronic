import { MessageCircle, MapPin } from "lucide-react";

export default function Kontak() {
  return (
    <section className="min-h-screen bg-linear-to-b from-slate-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Hubungi Kami
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Punya perangkat elektronik yang bermasalah? Konsultasikan gratis
            sekarang. Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="https://wa.me/6281231829437"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-10 bg-white rounded-2xl border-2 border-slate-100 hover:border-emerald-400 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="p-4 bg-emerald-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-14 h-14 text-emerald-600" />
            </div>
            <h3 className="font-bold text-xl text-brand-navy mb-2">
              Chat WhatsApp
            </h3>
            <p className="text-slate-600 text-center text-sm">
              Untuk informasi layanan, estimasi biaya, dan jadwal servis
            </p>
          </a>

          <div className="flex flex-col items-center p-10 bg-brand-navy text-white rounded-2xl shadow-lg">
            <div className="p-4 bg-white/10 rounded-2xl mb-6">
              <MapPin className="w-14 h-14 text-brand-steel" />
            </div>
            <h3 className="font-bold text-xl mb-2">Lokasi Workshop</h3>
            <div className="text-slate-300 text-center text-sm leading-relaxed">
              <p>
                Jalan Gunung Gangsir, Gesing RT001 RW008, Randupitu, Kec.
                Gempol, Pasuruan, Jawa Timur 67155.
              </p>
              <p className="mt-2">Sebelah utara PT Berkat Ganda Sentosa.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            title="Lokasi Syafa Workshop di Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15818.253907121529!2d112.70329445!3d-7.622383200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1770714651045!5m2!1sid!2sid"
            allowFullScreen
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
