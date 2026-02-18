import Footer from "@/components/custom/Footer";
import GoogleMap from "@/components/custom/MapLocation";
import Promotion from "@/components/custom/Promotion";
import Hero from "@/components/home/Hero";
import LayananHome from "@/components/home/LayananHome";
import Profile from "@/components/home/Review";
import VisiMisi from "@/components/home/VisiMisi";

export default function Home() {
  return (
    <main className="w-full bg-brand-light">
      <Hero />
      <Profile />
      <LayananHome />

      {/* Promotion */}
      <Promotion />

      <VisiMisi />

      {/* Google Map */}
      <GoogleMap />

      <Footer />
    </main>
  );
}
