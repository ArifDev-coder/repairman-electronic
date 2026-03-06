import Kontak from "@/components/root/kontak/Kontak";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Ada pertanyaan atau keluhan seputar barang elektronik Anda? Hubungi Syafa Workshop melalui WhatsApp atau kunjungi lokasi kami di Pasuruan untuk solusi servis terbaik."
}

export default function KontakPage() {
  return (
    <main className="min-h-screen">
      <Kontak />
    </main>
  );
}
