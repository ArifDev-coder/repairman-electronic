import Signout from "@/components/adminpanel/Signout";
import { createSupabaseServerClient } from "@/lib/supabase/serverClient";
import { redirect } from "next/navigation";
import { Clock, MessageSquare, Phone, User } from "lucide-react";

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  const { data: claimsData } = await supabase.auth.getClaims();

  if (!claimsData?.claims?.sub) {
    redirect("/admin");
  }

  const { data: pesanan } = await supabase
    .from("pesanan")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-brand-navy">
          Daftar Servis Masuk
        </h1>
        <Signout />
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        {!pesanan?.length ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm">
            <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Belum ada pesanan</p>
            <p className="text-sm text-slate-400 mt-1">
              Pesanan yang masuk akan muncul di sini
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {pesanan.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-3 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-brand-steel shrink-0" />
                      <p className="font-bold text-lg text-brand-navy truncate">
                        {item.nama}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        {item.whatsapp}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        {item.layanan}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 italic mt-2 line-clamp-2">
                      &ldquo;{item.keluhan}&rdquo;
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 sm:shrink-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                        item.status === "pending"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {item.status === "pending" ? "Menunggu" : "Selesai"}
                    </span>
                    <p className="text-xs text-slate-400">
                      {new Date(item.created_at).toLocaleString("id-ID", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
