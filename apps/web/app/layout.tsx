import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* HEADER (GLOBAL) */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <Link href="/" className="text-xl font-semibold tracking-tight">
              AISEL Technologies
            </Link>

            {/* NAV */}
            <nav className="hidden md:flex gap-8 text-sm text-gray-600">
              <Link href="/services" className="hover:text-black">
                Services
              </Link>
              <Link href="/about" className="hover:text-black">
                About
              </Link>
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Get Started
            </Link>
          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER (GLOBAL) */}
        <footer className="bg-white py-12 border-t mt-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-gray-500">

            <div>
              <div className="font-semibold text-gray-900 mb-2">
                AISEL Technologies
              </div>
              Enterprise cloud, AI, and platform engineering solutions.
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2">Services</div>
              <p>Cloud</p>
              <p>AI</p>
              <p>DevOps</p>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2">Company</div>
              <p>About</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2">Contact</div>
              <p>info@aiseltechnologies.com</p>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}