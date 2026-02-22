import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat, Roboto, Bebas_Neue } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/themes/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] });
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Syafa Workshop - Servis Elektronik Terpercaya",
  description:
    "Jasa servis elektronik terpercaya. Perbaikan TV, kulkas, mesin cuci, AC, dan perangkat elektronik lainnya. Gratis pengecekan, harga transparan, garansi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
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
          {/* Content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
