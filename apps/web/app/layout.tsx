"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (href, label) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        className={`block py-2 transition ${
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-600 hover:text-black"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* HEADER */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <Link href="/" className="text-xl font-semibold tracking-tight">
              AISEL Technologies
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex gap-8 text-sm">
              {navLink("/services", "Services")}
              {navLink("/about", "About")}
              {navLink("/contact", "Contact")}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="md:hidden border-t px-6 pb-4 bg-white">
              {navLink("/services", "Services")}
              {navLink("/about", "About")}
              {navLink("/contact", "Contact")}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-center"
              >
                Get Started
              </Link>
            </div>
          )}
        </header>

        {/* CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-white py-12 border-t mt-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm text-gray-500">

            <div>
              <div className="font-semibold text-gray-900 mb-2">
                AISEL Technologies
              </div>
              Enterprise cloud, AI, and platform engineering solutions.
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2">
                Navigation
              </div>
              <p>Services</p>
              <p>About</p>
              <p>Contact</p>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2">
                Contact
              </div>
              <p>info@aiseltechnologies.com</p>
            </div>

          </div>

          <div className="text-center text-xs text-gray-400 mt-6">
            © {new Date().getFullYear()} AISEL Technologies
          </div>
        </footer>

      </body>
    </html>
  );
}