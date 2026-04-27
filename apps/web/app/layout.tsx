import "./globals.css";
import Navbar from "../components/Navbar";

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

        {/* NAVBAR (Client Component) */}
        <Navbar />

        {/* CONTENT */}
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