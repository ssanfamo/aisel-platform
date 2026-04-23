import Link from "next/link";

export default function About() {
  return (
    <main className="bg-white text-gray-900">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-semibold">
            AISEL Technologies
          </Link>
        </div>
      </header>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold mb-6">
          About Us
        </h1>

        <p className="text-lg text-gray-500">
          AISEL Technologies is a cloud, AI, and platform engineering consultancy
          focused on building scalable and intelligent systems.
        </p>

        <p className="mt-6 text-gray-500">
          Our mission is to help organizations transform their technology into
          a competitive advantage through modern engineering practices.
        </p>
      </section>

    </main>
  );
}