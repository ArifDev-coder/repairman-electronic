import Hero from "@/components/pages/home/hero";
import LayananHome from "@/components/pages/home/layananhome";
import Profile from "@/components/pages/home/profil";

export default function Home() {
  return (
    <main className="w-full bg-brand-light">
      <Hero />
      <Profile />
      <LayananHome />
    </main>
  );
}
