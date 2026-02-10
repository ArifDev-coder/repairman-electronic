import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat, Roboto, Bebas_Neue } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/custom/navbar";
import MarqueeCustom from "@/components/custom/marquee";
import { ThemeProvider } from "@/components/themes/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Syafa Workshop - Jasa Servis Elektronik Terpercaya",
  description:
    "Jasa Servis Elektronik Terpercaya di Kota Anda. Kami memperbaiki TV, Kulkas, Mesin Cuci, dan lain-lain dengan teknisi berpengalaman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} scroll-smooth min-h-screen antialiased `}
      >
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
        >
          {/* Marquee Custom */}
          <MarqueeCustom />

          {/* Navbar Here */}
          <Navbar />

          {/* Content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
