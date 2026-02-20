import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Kontak() {
  return (
    <section className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-4">
          Hubungi Kami
        </h1>
        <p className="text-slate-500 mb-12">
          Punya barang elektronik rusak? Konsultasikan gratis sekarang.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KARTU WHATSAPP */}
          <a
            href="https://wa.me/6281231829437"
            className="flex flex-col items-center p-8 bg-green-50 rounded-2xl border-2 border-green-100 hover:border-green-500 transition-all group"
          >
            <MessageCircle className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-lg">Chat WhatsApp</h3>
            <p className="text-sm text-green-700">
              untuk informasi lebih lanjut.
            </p>
          </a>

          {/* KARTU ALAMAT */}
          <div className="flex flex-col items-center p-8 bg-brand-navy text-white rounded-2xl">
            <MapPin className="w-12 h-12 text-brand-steel mb-4" />
            <h3 className="font-bold text-lg">Lokasi Workshop</h3>
            <div className="text-sm text-slate-300 text-center">
              <p>
                Jalan Gunung Gangsir, Gesing RT001 RW008, Randupitu, Kec.
                Gempol, Pasuruan, Jawa Timur 67155.
              </p>
              <p>Sebelah Utara PT Berkat Ganda Sentosa.</p>
            </div>
          </div>
        </div>

        {/* MAPS PLACEHOLDER - Bikin box biar CLS gak berantakan */}
        <div className="mt-12 w-full h-64 bg-slate-100 rounded-2xl overflow-hidden relative shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15818.253907121529!2d112.70329445!3d-7.622383200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1770714651045!5m2!1sid!2sid"
              allowFullScreen
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
