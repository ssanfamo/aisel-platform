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
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">

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

          <Link
            href="/"
            className={linkClass("/")}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={linkClass("/services")}
          >
            Services
          </Link>

          <Link
            href="/case-studies"
            className={linkClass("/case-studies")}
          >
            Case Studies
          </Link>

          <Link
            href="/about"
            className={linkClass("/about")}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={linkClass("/contact")}
          >
            Contact
          </Link>

        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden rounded-md bg-brand-primary px-4 py-2 text-sm text-white transition-all hover:shadow-md md:inline-block"
        >
          Infrastructure Assessment
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border text-xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div className="border-t bg-white shadow-lg md:hidden">

          <div className="flex flex-col px-6 py-6">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base transition-all ${
                pathname === "/"
                  ? "bg-brand-light text-brand-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base transition-all ${
                pathname === "/services"
                  ? "bg-brand-light text-brand-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Services
            </Link>

            <Link
              href="/case-studies"
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base transition-all ${
                pathname === "/case-studies"
                  ? "bg-brand-light text-brand-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base transition-all ${
                pathname === "/about"
                  ? "bg-brand-light text-brand-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base transition-all ${
                pathname === "/contact"
                  ? "bg-brand-light text-brand-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>

            {/* MOBILE CTA */}
            <div className="mt-6 border-t pt-6">

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-lg bg-brand-primary px-5 py-4 text-center text-sm font-medium text-white transition-all hover:shadow-lg"
              >
                Schedule Infrastructure Assessment
              </Link>

            </div>

          </div>

        </div>

      )}

    </header>
  );
}