import StatusToko from "./StatusToko";

export default function Tentang() {
  return (
    <main className="w-full min-h-screen bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Informasi Workshop
          </h1>
          <p className="text-slate-600">
            Status buka tutup dan lokasi workshop kami
          </p>
        </div>
        <StatusToko isOpen={true} />
      </div>
    </main>
  );
}
