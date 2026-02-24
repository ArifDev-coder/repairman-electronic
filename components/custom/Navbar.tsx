"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Pesan", href: "/pesan" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!isMobileMenuOpen) return;

      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        closeMenu();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300",
        "py-4 px-6 md:px-8 select-none",
        "bg-brand-navy/95 backdrop-blur-lg",
        "text-white border-b border-white/10 shadow-lg",
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-bold text-xl hover:text-brand-light transition-colors"
          >
            Syafa Workshop
          </Link>

          <div className="gap-6 items-center hidden md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-all duration-200 font-medium",
                  isActive(item.href)
                    ? "text-brand-light font-semibold"
                    : "hover:text-brand-light/80",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/6281231829437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors"
            >
              Hubungi
            </Link>
          </div>

          <button
            ref={toggleRef}
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all"
            aria-label="Buka menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          ref={menuRef}
          className={cn(
            "w-full md:hidden overflow-hidden flex flex-col",
            "transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "max-h-96 opacity-100 translate-y-0 mt-4"
              : "max-h-0 opacity-0 -translate-y-2",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "px-4 py-3 rounded-lg transition-all font-medium",
                isActive(item.href)
                  ? "bg-white/20 text-white"
                  : "hover:bg-white/10",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/6281231829437"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 mx-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold text-center flex items-center justify-center gap-2"
          >
            Hubungi via WhatsApp
          </Link>
        </div>
      </div>
    </nav>
  );
}
