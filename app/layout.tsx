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
  title: "Syafa Workshop",
  description:
    "Jasa Servis Dan Pembuatan Ampli/Mixer",
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
