import Kontak from "@/components/root/kontak/Kontak";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | Syafa Workshop",
  description: "Halaman Kontak Syafa Workshop. Di tujukan kepada client yang ingin menghubungi kami untuk hal tertentu selain memesan jasa."
}

export default function KontakPage() {
  return (
    <main className="min-h-screen">
      <Kontak />
    </main>
  );
}
