"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Login failed"
        );
      }

      localStorage.setItem(
        "access_token",
        data.access_token
      );

      router.push(
        "/dashboard"
      );
    } catch (err: any) {
      setError(
        err.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020817] text-white">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold">
            AISEL
          </h1>

          <p className="mt-2 text-slate-400">
            Infrastructure
            Observability Platform
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none"
              required
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none"
              required
            />

          </div>

          {error && (

            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">

              {error}

            </div>

          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-cyan-600 py-3 font-semibold hover:bg-cyan-500 disabled:opacity-50"
          >

            {loading
              ? "Signing In..."
              : "Sign In"}

          </button>

        </form>

      </div>

    </main>
  );
}