import Signout from "@/components/adminpanel/Signout";
import { createSupabaseServerClient } from "@/lib/supabase/serverClient";
import { redirect } from "next/navigation";
import DashboardList from "@/components/adminpanel/DashboardList";

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
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-bold text-brand-navy">
          Dashboard Admin
        </h1>
        <Signout />
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Daftar Servis Masuk</h2>
          <p className="text-slate-500 text-sm">Pantau dan kelola pesanan servis pelanggan secara real-time.</p>
        </div>
        
        <DashboardList initialPesanan={pesanan || []} />
      </main>
    </div>
  );
};
