import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/themes/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Syafa Workshop | Servis Elektronik & Audio Terpercaya",
    template: "%s | Syafa Workshop",
  },
  description:
    "Solusi profesional untuk servis TV, kulkas, mesin cuci, serta perakitan Audio Ampli & Mixer. Berpengalaman, bergaransi, dan terpercaya di Pasuruan.",
  keywords: ["servis elektronik", "servis tv pasuruan", "rakit ampli", "servis kulkas", "servis mesin cuci", "syafa workshop", "audio mixer"],
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
