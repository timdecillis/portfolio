"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const links = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Music", href: "/music" },
    { label: "Teaching", href: "/teaching" },
  ];

  return (
    <nav
      className={`flex items-center px-6 md:px-16 lg:px-32 xl:px-56 py-8 gap-6 ${
        isHome
          ? "absolute top-0 left-0 w-full z-20 bg-transparent"
          : "relative shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
      }`}
    >
      <Link href="/" className="text-3xl font-bold">
        Tim DeCillis
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`text-lg font-medium ${
              pathname === link.href ? "underline underline-offset-4" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-current transition-transform ${
            menuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-current transition-transform ${
            menuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a3a4a] border-b border-[#e8dcc8]/20 shadow-md px-6 py-6 flex flex-col gap-4 md:hidden z-50">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`text-lg font-medium ${
                pathname === link.href ? "underline underline-offset-4" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
