"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const links = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Music", href: "/music" },
    { label: "Teaching", href: "/teaching" },
  ];

  return (
    <nav className="flex items-center gap-8 px-16 py-8">
      <Link href="/" className="text-3xl font-bold italic">
        Tim DeCillis
      </Link>
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
    </nav>
  );
};
