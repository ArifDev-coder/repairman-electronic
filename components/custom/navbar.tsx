"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const NAV_ITEMS = ["Home", "Jasa", "Berita", "Kontak"] as const;

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

  const isActive = (link: string) => {
    const href = `/${link.toLowerCase()}`;
    return pathname === href || (link === "Home" && pathname === "/");
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
        "w-full transition-all duration-100 ease-in-out sticky top-0",
        "py-4 px-8 bg-brand-dark text-white select-none",
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center z-40">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl hover:text-blue-200 transition-colors hover:animate-pulse"
          >
            Syafa Workshop
          </Link>

          {/* Desktop Navigation */}
          <div className="gap-8 items-center hidden md:flex">
            {NAV_ITEMS.map((link) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={cn(
                  "transition-all duration-200",
                  isActive(link)
                    ? "text-blue-400 font-semibold scale-105"
                    : "hover:text-blue-200",
                )}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-200 "
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          ref={menuRef}
          className={cn(
            "w-full md:hidden overflow-hidden flex flex-col",
            "transition-all duration-300 ease-in-out origin-top",
            "text-center",
            isMobileMenuOpen
              ? "max-h-125 opacity-100 translate-y-0 mt-4"
              : "max-h-0 opacity-0 -translate-y-2",
          )}
        >
          {NAV_ITEMS.map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              onClick={closeMenu}
              className={cn(
                "px-4 py-2 rounded-lg transition-all duration-200",
                isActive(link)
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-white/5 text-white",
              )}
            >
              {link}
            </Link>
          ))}
          <Button className="mt-4 bg-red-600 font-bold" color="">
            Hubungi Sekarang
          </Button>
        </div>
      </div>
    </nav>
  );
}
