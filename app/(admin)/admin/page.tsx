import { supabase } from "@/lib/supabase/supabase";

export default async function AdminPage() {
  // Ambil data langsung dari server (Gak butuh API route buat baca doang)
  const { data: pesanan } = await supabase
    .from("pesanan")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Daftar Servis Masuk</h1>
      <div className="grid gap-4">
        {pesanan?.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-xl flex justify-between items-center bg-white shadow-sm"
          >
            <div>
              <p className="font-bold text-lg">{item.nama}</p>
              <p className="text-sm text-slate-500">
                {item.layanan} - {item.whatsapp}
              </p>
              <p className="italic text-xs mt-1">"{item.keluhan}"</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  item.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.status.toUpperCase()}
              </span>
              <p className="text-[10px] text-slate-400">
                {new Date(item.created_at).toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
