import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 40 }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/logo.png"
        alt="Syafa Workshop Logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-none tracking-tight text-white">
          Syafa
        </span>
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-teal">
          Workshop
        </span>
      </div>
    </div>
  );
}
