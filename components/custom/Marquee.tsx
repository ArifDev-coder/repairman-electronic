"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { MessageCircle } from "lucide-react";

export default function MarqueeCustom() {
  return (
    <div className="w-full bg-brand-steel text-white py-2 border-b border-white/10">
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
