import FormPesanan from "@/components/root/pesan/FormPesanan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesan Layanan",
  description: "Formulir pemesanan layanan servis elektronik Syafa Workshop. Klik di sini untuk memesan servis perbaikan TV, Kulkas, Mixer, atau konsultasi Audio."
};

const page = () => {
  return (
    <main className="w-full min-h-screen bg-linear-to-b from-brand-light to-white">
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">
            Pesan Layanan
          </h1>
          <p className="text-slate-600 max-w-md mx-auto">
            Isi form di bawah untuk memesan layanan servis. Tim kami akan
            menghubungi Anda segera.
          </p>
        </div>
        <FormPesanan />
      </section>
    </main>
  );
};

export default page;
