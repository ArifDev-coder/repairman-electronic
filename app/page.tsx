import Footer from "@/components/custom/footer";
import GoogleMap from "@/components/custom/maplocation";
import Promotion from "@/components/custom/promotion";
import Hero from "@/app/home/hero";
import LayananHome from "@/app/home/layananhome";
import Profile from "@/app/home/review";
import VisiMisi from "@/app/home/visimisi";

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
