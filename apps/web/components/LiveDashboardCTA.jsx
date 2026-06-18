import Link from "next/link";

export default function LiveDashboardCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#0B1120] p-10 text-center">

        <h2 className="text-4xl font-bold text-white">
          See Your Infrastructure in Real Time
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
          Monitor servers, applications, cloud resources and business
          services from a single dashboard.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            href="/contact"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-black hover:bg-emerald-400"
          >
            Book Demo
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-white/10 px-6 py-3 text-white hover:bg-white/5"
          >
            View Dashboard
          </Link>

        </div>

      </div>
    </section>
  );
}
