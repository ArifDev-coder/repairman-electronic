import Tentang from "@/components/root/berita/Tentang";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info & Lokasi",
  description: "Cek lokasi workshop Syafa di Pasuruan, status buka/tutup bengkel, dan informasi layanan servis kami yang terpercaya."
};

export default function TentangPage() {
  return (
    <main className="min-h-screen">
      <Tentang />
    </main>
  );
}
