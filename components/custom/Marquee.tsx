"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { URLWA, NoWa } from "@/data/NoHp";
import { formatPhone } from "@/lib/utils/formatPhone";

const Marquee = dynamic(
  () => import("react-fast-marquee").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full">
        <Link
          href={URLWA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-sm hover:underline"
        >
          Hubungi WhatsApp: {formatPhone(NoWa)} — Gratis pengecekan!
        </Link>
      </div>
    ),
  },
);

export default function MarqueeCustom() {
  return (
    <div className="w-full h-10 bg-brand-steel text-white py-2 border-b border-white/10 shrink-0 min-h-[40px]">
      <Marquee pauseOnHover speed={40}>
        <Link
          href={URLWA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mx-6 font-semibold text-sm hover:underline"
        >
          Hubungi WhatsApp: {formatPhone(NoWa)} — Gratis pengecekan!
        </Link>
      </Marquee>
    </div>
  );
}
