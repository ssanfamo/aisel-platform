"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const desktopLink = (path: string) =>
    `${
      pathname === path
        ? "text-brand-primary font-semibold"
        : "text-gray-700 hover:text-brand-primary"
    } transition-colors`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <img
            src="/logo.png"
            alt="AISEL Technologies"
            className="h-6"
          />

          <span className="font-semibold tracking-tight">
            AISEL Technologies
          </span>

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 text-sm md:flex">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={desktopLink(item.href)}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg md:inline-flex"
        >
          Infrastructure Assessment
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-xl md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div className="md:hidden border-t border-gray-100 bg-white">

          <div className="flex flex-col gap-2 px-6 py-6">

            {navItems.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`w-full rounded-xl px-4 py-4 text-base font-medium ${
                  pathname === item.href
                    ? "bg-brand-light text-brand-primary"
                    : "bg-gray-50 text-gray-700"
                }`}
              >
                {item.name}
              </Link>

            ))}

            {/* MOBILE CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl bg-brand-primary px-5 py-4 text-center text-sm font-medium text-white"
            >
              Schedule Infrastructure Assessment
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}