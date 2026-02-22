"use client";

import { useTransition, useState, useEffect } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClient";
import { useRouter } from "next/navigation";

type AdminLoginFormProps = {
  user: User | null;
};

const LoginForm = ({ user }: AdminLoginFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const supabase = getSupabaseBrowserClient();
  const [currentUser, setCurrentUser] = useState<User | null>(user);
  const router = useRouter();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setCurrentUser(session?.user ?? null);
        if (session?.user) {
          router.push("/admin/dashboard");
        }
      },
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [supabase, router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Mengarahkan ke dashboard...");

        setTimeout(() => {
          router.push("/admin/dashboard");
          router.refresh();
        }, 100);
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-brand-navy tracking-tight">
            Panel Admin
          </h1>
          <p className="text-slate-600 mt-2">
            Syafa Workshop — Masuk ke dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-brand-navy mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none text-brand-navy transition-all"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-brand-navy mb-2">
              Kata Sandi
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none text-brand-navy transition-all pr-12"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-brand-navy rounded-lg"
                aria-label={showPassword ? "Sembunyikan sandi" : "Tampilkan sandi"}
              >
                {showPassword ? (
                  <EyeClosed className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy/90 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? "Memproses..." : "Masuk ke Dashboard"}
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-sm ${
              status.includes("Mengarahkan")
                ? "text-emerald-600"
                : "text-red-600"
            }`}
            role="status"
          >
            {status}
          </p>
        )}

        <p className="text-center mt-8 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Syafa Workshop
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
