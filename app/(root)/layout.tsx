import { ReactNode } from "react";

import MarqueeCustom from "@/components/custom/Marquee";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* Marquee Custom */}
      <MarqueeCustom />

      {/* Navbar Here */}
      <Navbar />

      {children}

      {/* Footer Here */}
      <Footer />
    </div>
  );
};

export default Layout;
