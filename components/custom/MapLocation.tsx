import { MapPin } from "lucide-react";

export default function GoogleMap() {
  return (
    <section className="w-full py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-brand-navy mb-3">
            Temukan Lokasi Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kunjungi workshop kami untuk konsultasi langsung
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d275.1896042540242!2d112.71070492323867!3d-7.61754794302574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzcnMDMuMSJTIDExMsKwNDInNDAuOCJF!5e0!3m2!1sid!2sid!4v1771386632919!5m2!1sid!2sid"
              width="100%"
              height="400"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Syafa Workshop"
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center p-8 bg-white rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-brand-steel/10 rounded-xl shrink-0">
                <MapPin className="w-6 h-6 text-brand-steel" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-brand-navy mb-3">
                  Alamat Lengkap
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Jalan Gunung Gangsir, Gesing RT001 RW008, Randupitu, Kec.
                  Gempol, Pasuruan, Jawa Timur 67155.
                </p>
                <p className="text-slate-600 mt-2">
                  Sebelah utara PT Berkat Ganda Sentosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
