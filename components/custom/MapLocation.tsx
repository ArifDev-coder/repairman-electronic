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
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d275.1896042540242!2d112.71070492323867!3d-7.61754794302574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzcnMDMuMSJTIDExMsKwNDInNDAuOCJF!5e0!3m2!1sid!2sid!4v1771386632919!5m2!1sid!2sid"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
