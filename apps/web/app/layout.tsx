import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "AISEL Technologies",
  description: "Enterprise Cloud & AI Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* NAVBAR */}
        <header className="fixed top-0 w-full bg-white border-b z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

            <h1 className="font-semibold text-lg">
              AISEL Technologies
            </h1>

            <nav className="flex gap-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-20">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-100 text-center py-10 mt-20 text-sm text-gray-500">
          © {new Date().getFullYear()} AISEL Technologies. All rights reserved.
        </footer>

      </body>
    </html>
  );
}