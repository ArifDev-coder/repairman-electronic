export default function VisiMisi() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="font-bold text-3xl text-center mb-8  bg-linear-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent ">
          Visi & Misi
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-4 border  rounded-lg shadow-sm bg-white">
            <h2 className="font-semibold text-2xl mb-4 text-brand-steel">
              Visi
            </h2>
            <p className="text-lg text-justify">
              Menjadi penyedia layanan servis elektronik terpercaya dan terdepan
              di kota kami, dikenal karena kualitas pelayanan, keahlian teknisi,
              dan kepuasan pelanggan yang luar biasa.
            </p>
          </div>
          <div className="p-4 border  rounded-lg shadow-sm bg-white">
            <h2 className="font-semibold text-2xl mb-4 text-brand-steel">
              Misi
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Menyediakan layanan servis elektronik yang cepat, andal, dan
                berkualitas tinggi.
              </li>
              <li>
                Mempekerjakan teknisi yang berpengalaman dan terus mengikuti
                perkembangan teknologi terbaru.
              </li>
              <li>
                Membangun hubungan jangka panjang dengan pelanggan melalui
                pelayanan yang ramah dan profesional.
              </li>
              <li>
                Menjaga transparansi harga dan memberikan solusi terbaik untuk
                setiap masalah elektronik.
              </li>
              <li>
                Berkomitmen terhadap kepuasan pelanggan dengan memberikan
                garansi atas setiap layanan yang diberikan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
