import dynamic from "next/dynamic";
import Hero from "@/components/root/home/Hero";
import LayananHome from "@/components/root/home/LayananHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda | Spesialis Servis & Audio Workshop",
  description: "Selamat datang di Syafa Workshop. Melayani servis peralatan elektronik rumah tangga dan jasa rakit perangkat audio berkualitas tinggi dengan garansi terpercaya."
}

const Profile = dynamic(() => import("@/components/root/home/Review"), {
  ssr: true,
  loading: () => (
    <section className="py-20 md:py-24 bg-slate-50 min-h-100" />
  ),
});

const Promotion = dynamic(() => import("@/components/root/home/Promotion"), {
  ssr: true,
  loading: () => (
    <section className="w-full py-16 md:py-20 bg-brand-navy min-h-30" />
  ),
});

const VisiMisi = dynamic(() => import("@/components/root/home/VisiMisi"), {
  ssr: true,
  loading: () => (
    <section className="w-full py-20 md:py-24 bg-white min-h-100" />
  ),
});

const GoogleMap = dynamic(() => import("@/components/custom/MapLocation"), {
  ssr: true,
  loading: () => (
    <section className="w-full py-20 md:py-24 bg-slate-50 min-h-100" />
  ),
});

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <LayananHome />
      <Profile />
      <Promotion />
      <VisiMisi />
      <GoogleMap />
    </main>
  );
}
