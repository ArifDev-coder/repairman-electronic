import GoogleMap from "@/components/custom/MapLocation";
import Promotion from "@/components/custom/Promotion";
import Hero from "@/components/root/home/Hero";
import LayananHome from "@/components/root/home/LayananHome";
import Profile from "@/components/root/home/Review";
import VisiMisi from "@/components/root/home/VisiMisi";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <Profile />
      <LayananHome />
      <Promotion />
      <VisiMisi />
      <GoogleMap />
    </main>
  );
}
