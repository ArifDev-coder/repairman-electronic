import dynamic from "next/dynamic";
import Hero from "@/components/root/home/Hero";
import LayananHome from "@/components/root/home/LayananHome";

const Profile = dynamic(() => import("@/components/root/home/Review"), {
  ssr: true,
  loading: () => (
    <section className="py-20 md:py-24 bg-slate-50 min-h-[400px]" />
  ),
});

const Promotion = dynamic(() => import("@/components/custom/Promotion"), {
  ssr: true,
  loading: () => (
    <section className="w-full py-16 md:py-20 bg-brand-navy min-h-[120px]" />
  ),
});

const VisiMisi = dynamic(() => import("@/components/root/home/VisiMisi"), {
  ssr: true,
  loading: () => (
    <section className="w-full py-20 md:py-24 bg-white min-h-[400px]" />
  ),
});

const GoogleMap = dynamic(() => import("@/components/custom/MapLocation"), {
  ssr: true,
  loading: () => (
    <section className="w-full py-20 md:py-24 bg-slate-50 min-h-[400px]" />
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
