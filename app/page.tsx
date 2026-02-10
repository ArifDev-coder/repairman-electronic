import Footer from "@/components/custom/footer";
import GoogleMap from "@/components/custom/maplocation";
import Promotion from "@/components/custom/promotion";
import Hero from "@/app/hero";
import LayananHome from "@/app/layananhome";
import Profile from "@/app/review";
import VisiMisi from "@/app/visimisi";

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
