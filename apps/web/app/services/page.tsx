import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-white text-gray-900">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            AISEL Technologies
          </Link>
        </div>
      </header>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold mb-6">Services</h1>

        <p className="text-lg text-gray-500 max-w-2xl">
          We deliver enterprise cloud, AI, and platform engineering solutions
          designed to scale modern organizations.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {[
            "Cloud Infrastructure",
            "AI Automation",
            "DevOps Engineering",
            "Platform Engineering",
            "Managed IT Services",
          ].map((service, i) => (
            <div key={i} className="border p-8 rounded-xl">
              {service}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}