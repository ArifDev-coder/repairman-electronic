"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = ["Home", "Services", "About", "Contact"] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

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
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav className="sticky top-0">
      <div
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out",
          "py-4 px-8 bg-[#1A374D] text-white",
          "flex justify-between items-center",
          isScrolled && "bg-[#1A374D]/80 backdrop-blur-lg rounded-b-4xl shadow-2xl shadow-black/20", isMobileMenuOpen && "bg-[#1A374D]/90 backdrop-blur-lg shadow-2xl shadow-black/20", isScrolled && isMobileMenuOpen && "rounded-br-none"
        )}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="font-bold text-xl hover:text-blue-200 transition-colors"
        >
          Imron Servis
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
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-200"
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
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
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
          "fixed top-15.5 right-0 w-full max-w-sm bg-[#1A374D]/50 backdrop-blur-lg md:hidden",
          "z-40 flex flex-col pt-8 pb-6 space-y-4 px-6",
          "transition-all duration-300 ease-in-out",
          "rounded-bl-4xl",
          isMobileMenuOpen
            ? "translate-x-0  opacity-100"
            : "translate-x-full opacity-0  pointer-events-none"
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
                ? "bg-blue-500/20 text-blue-300 font-semibold"
                : "hover:bg-white/5 text-white"
            )}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
