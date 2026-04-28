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
      <body className={`${inter.variable} font-sans bg-white text-gray-900`}>

        {/* NAVBAR (Client Component) */}
        <Navbar />

        {/* MAIN CONTENT */}
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