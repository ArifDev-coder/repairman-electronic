"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeCustom() {
  return (
    <div className="dark:text-black text-white dark:bg-white">
      <Marquee>
        <span className="mx-2 font-bold">📞 HUBUNGI WA: 0812-XXXX-XXXX</span>
      </Marquee>
    </div>
  );
}
