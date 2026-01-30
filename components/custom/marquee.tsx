"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function MarqueeCustom() {
  return (
    <div className="w-full bg-brand-steel text-white py-1.5 border-b border-white/5">
      <Marquee pauseOnHover={true} speed={50}>
        <span className="mx-4 font-bold text-sm select-none tracking-wide">
          <Link href="https://wa.me/62xxxxxxxxxxxx" target="_blank">
            📞 HUBUNGI WA:{" "}
            <span className="underline decoration-blue-400">
              0812-XXXX-XXXX
            </span>
          </Link>
        </span>
      </Marquee>
    </div>
  );
}
