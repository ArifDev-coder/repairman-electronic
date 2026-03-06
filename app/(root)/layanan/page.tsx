import SemuaLayanan from "@/components/root/jasa/SemuaLayanan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | Syafa Workshop",
  description: "Halaman semua layanan yang dimiliki oleh Syafa Workshop",
};

export default function JasaPage() {
  return (
    <main className="min-h-screen">
      <SemuaLayanan />
    </main>
  );
}
