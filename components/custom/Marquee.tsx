"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { MessageCircle } from "lucide-react";

const Marquee = dynamic(
  () => import("react-fast-marquee").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full">
        <Link
          href="https://wa.me/6281231829437"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-sm hover:underline"
        >
          <MessageCircle className="w-4 h-4" />
          Hubungi WhatsApp: 0812-3182-9437 — Gratis pengecekan!
        </Link>
      </div>
    ),
  }
);

export default function MarqueeCustom() {
  return (
    <div className="w-full h-10 bg-brand-steel text-white py-2 border-b border-white/10 shrink-0 min-h-[40px]">
      <Marquee pauseOnHover speed={40}>
        <Link
          href="https://wa.me/6281231829437"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mx-6 font-semibold text-sm hover:underline"
        >
          <MessageCircle className="w-4 h-4" />
          Hubungi WhatsApp: 0812-3182-9437 — Gratis pengecekan!
        </Link>
      </Marquee>
    </div>
  );
}
