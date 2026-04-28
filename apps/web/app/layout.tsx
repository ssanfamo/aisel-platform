import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
      <body className={`${inter.variable} font-sans bg-white text-gray-900 antialiased`}>

        <Navbar />

        <main className="pt-20">
          {children}
        </main>

        <footer className="bg-gray-100 mt-32">
          <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} AISEL Technologies. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}