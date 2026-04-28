"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `transition-colors ${
      pathname === path
        ? "text-brand-primary font-semibold"
        : "text-gray-700 hover:text-brand-primary"
    }`;

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" className="h-6" />
          <span className="font-semibold tracking-tight">
            AISEL Technologies
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/case-studies" className={linkClass("/case-studies")}>Case Studies</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>

        {/* CTA BUTTON */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-brand-primary text-white px-4 py-2 rounded-md text-sm hover:shadow-md"
        >
          Get Started
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          <Link href="/" onClick={() => setOpen(false)} className={linkClass("/")}>
            Home
          </Link>

          <Link href="/services" onClick={() => setOpen(false)} className={linkClass("/services")}>
            Services
          </Link>

          <Link href="/about" onClick={() => setOpen(false)} className={linkClass("/about")}>
            About
          </Link>

          <Link href="/case-studies" onClick={() => setOpen(false)} className={linkClass("/case-studies")}>
            Case Studies
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)} className={linkClass("/contact")}>
            Contact
          </Link>

        </div>
      )}
    </header>
  );
}