export default function GoogleMap() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-8 py-20 ">
        <h2 className="font-bold text-3xl my-8 text-center text-brand-navy">
          Lokasi Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 md:bg-brand-navy rounded-lg ">
          <div className="w-full h-96 rounded-lg overflow-hidden">
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
          <div className="px-4 md:p-4 md:text-white ">
            <h3 className="text-xl font-semibold text-brand-steel md:text-brand-light">
              Lokasi Lengkap:
            </h3>
            <div className="mt-3">
              <p>
                Jalan Gunung Gangsir, Gesing RT001 RW008, Randupitu, Kec.
                Gempol, Pasuruan, Jawa Timur 67155.
              </p>
              <p>Sebelah Utara PT Berkat Ganda Sentosa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
