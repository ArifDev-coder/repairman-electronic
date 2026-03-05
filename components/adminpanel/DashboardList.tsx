"use client";

import { useEffect, useState, useRef } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClient";
import { Clock, MessageSquare, Phone, User, CheckCircle2, XCircle, Loader2, Send, Bell, RefreshCcw } from "lucide-react";
import { updateOrderStatus } from "@/app/(admin)/admin/dashboard/actions";
import { formatPhone } from "@/lib/utils/formatPhone";
import { useRouter } from "next/navigation";

interface Pesanan {
  id: string;
  nama: string;
  whatsapp: string;
  layanan: string;
  keluhan: string;
  status: string;
  created_at: string;
}

export default function DashboardList({ initialPesanan }: { initialPesanan: Pesanan[] }) {
  const [pesanan, setPesanan] = useState<Pesanan[]>(initialPesanan);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [newOrderToast, setNewOrderToast] = useState<{nama: string; layanan: string} | null>(null);
  const supabase = getSupabaseBrowserClient();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize audio for notification
    audioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
  }, []);

  const refreshData = async () => {
    setIsRefreshing(true);
    router.refresh();
    // Re-fetch using browser client to ensure immediate state update
    const { data } = await supabase
      .from("pesanan")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setPesanan(data);
    setIsRefreshing(false);
  };

  useEffect(() => {
    console.log("Setting up Supabase Realtime...");
    
    const channel = supabase
      .channel("pesanan-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "pesanan",
        },
        (payload) => {
          console.log("Realtime change received:", payload);
          if (payload.eventType === "INSERT") {
            const newPesanan = payload.new as Pesanan;
            setPesanan((prev) => [newPesanan, ...prev]);
            
            // Show toast
            setNewOrderToast({
              nama: newPesanan.nama,
              layanan: newPesanan.layanan
            });
            
            // Play sound notification
            if (audioRef.current) {
              audioRef.current.play().catch(err => console.error("Error playing sound:", err));
            }

            // Auto-hide toast after 5 seconds
            setTimeout(() => setNewOrderToast(null), 5000);
          } else if (payload.eventType === "UPDATE") {
            const updatedPesanan = payload.new as Pesanan;
            setPesanan((prev) =>
              prev.map((item) => (item.id === updatedPesanan.id ? updatedPesanan : item))
            );
          } else if (payload.eventType === "DELETE") {
            setPesanan((prev) => prev.filter((item) => item.id !== payload.old.id));
          }
        }
      )
      .subscribe((status) => {
        console.log("Realtime subscription status:", status);
        if (status === "CHANNEL_ERROR") {
          console.error("Realtime subscription failed. Check if replication is enabled for 'pesanan' table.");
        }
      });

    return () => {
      console.log("Removing Supabase Realtime channel...");
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    setLoadingId(id);
    try {
      await updateOrderStatus(id, newStatus);
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Gagal mengubah status. Silakan coba lagi.");
    } finally {
      setLoadingId(null);
    }
  };

  const openWhatsApp = (whatsapp: string, nama: string) => {
    // Clean phone number: remove all non-digits
    let cleaned = whatsapp.replace(/\D/g, "");
    
    // Format to International format for Indonesia (62)
    if (cleaned.startsWith("0")) {
      cleaned = "62" + cleaned.slice(1);
    } else if (!cleaned.startsWith("62")) {
      cleaned = "62" + cleaned;
    }
    
    const message = encodeURIComponent(`Halo ${nama}, ini dari Admin Repairman Electronic. Terkait pesanan servis Anda:`);
    window.open(`https://wa.me/${cleaned}?text=${message}`, "_blank");
  };

  return (
    <div className="space-y-4 relative">
      {/* Manual Refresh Button */}
      <div className="flex justify-end mb-2">
        <button 
          onClick={refreshData}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-600 disabled:opacity-50"
        >
          <RefreshCcw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
          {isRefreshing ? "Menyegarkan..." : "Segarkan Manual"}
        </button>
      </div>

      {/* Toast Notification */}
      {newOrderToast && (
        <div className="fixed top-24 right-6 left-6 md:left-auto md:w-80 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-brand-navy text-white rounded-2xl p-4 shadow-2xl flex items-center gap-4 border border-white/10">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5 text-white animate-bounce" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm">Pesanan Baru!</p>
              <p className="text-xs text-slate-300 truncate">
                {newOrderToast.nama} - {newOrderToast.layanan}
              </p>
            </div>
            <button 
              onClick={() => setNewOrderToast(null)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {!pesanan.length ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm">
          <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500 font-medium">Belum ada pesanan</p>
          <p className="text-sm text-slate-400 mt-1">
            Pesanan yang masuk akan muncul di sini secara real-time
          </p>
        </div>
      ) : (
        pesanan.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
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
                    {formatPhone(item.whatsapp)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {item.layanan}
                  </span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mt-2">
                  <p className="text-sm text-slate-600 italic">
                    &ldquo;{item.keluhan}&rdquo;
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 min-w-[160px]">
                <div className="flex flex-col items-end gap-1">
                   <StatusBadge status={item.status} />
                   <p className="text-[10px] text-slate-400">
                    {new Date(item.created_at).toLocaleString("id-ID", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => openWhatsApp(item.whatsapp, item.nama)}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-medium transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Hubungi Pelanggan
                  </button>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleStatusUpdate(item.id, "proses")}
                      disabled={loadingId === item.id || item.status === "proses"}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        item.status === "proses"
                          ? "bg-blue-100 text-blue-700 cursor-default"
                          : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                      }`}
                    >
                      {loadingId === item.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Clock className="w-3 h-3" />}
                      Proses
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(item.id, "selesai")}
                      disabled={loadingId === item.id || item.status === "selesai"}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        item.status === "selesai"
                          ? "bg-emerald-100 text-emerald-700 cursor-default"
                          : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                      }`}
                    >
                      {loadingId === item.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <CheckCircle2 className="w-3 h-3" />}
                      Selesai
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(item.id, "dibatalkan")}
                      disabled={loadingId === item.id || item.status === "dibatalkan"}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        item.status === "dibatalkan"
                          ? "bg-rose-100 text-rose-700 cursor-default"
                          : "bg-rose-50 text-rose-600 hover:bg-rose-100"
                      }`}
                    >
                      {loadingId === item.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <XCircle className="w-3 h-3" />}
                      Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "pending":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 border border-amber-200">
          <Clock className="w-3 h-3" />
          Pending
        </span>
      );
    case "proses":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
          <Loader2 className="w-3 h-3 animate-spin" />
          Proses
        </span>
      );
    case "selesai":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3 h-3" />
          Selesai
        </span>
      );
    case "dibatalkan":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700 border border-rose-200">
          <XCircle className="w-3 h-3" />
          Dibatalkan
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
          {status}
        </span>
      );
  }
}
