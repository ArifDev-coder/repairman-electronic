"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function MarqueeCustom() {
  return (
    <div className="dark:text-black text-white dark:bg-white">
      <Marquee pauseOnHover={true}>
        <span className="mx-2 font-bold text-sm md:text-md lg:text-lg select-none">
          <Link href="https://wa.me/62xxxxxxxxxxxx" target="_blank">
            📞 HUBUNGI WA: <span className="underline hover:pointer select-all">0812-XXXX-XXXX</span>
          </Link>
        </span>
      </Marquee>
    </div>
  );
}
