import SemuaLayanan from "@/components/root/jasa/SemuaLayanan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Lengkap",
  description: "Daftar lengkap layanan kami: servis TV (LED/LCD), kulkas, mesin cuci, kipas angin, blender, hingga jasa rakit & servis audio amplifier/mixer profesional.",
};

export default function JasaPage() {
  return (
    <main className="min-h-screen">
      <SemuaLayanan />
    </main>
  );
}
