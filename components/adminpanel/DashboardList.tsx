"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClient";
import { Clock, MessageSquare, Phone, User, CheckCircle2, XCircle, Loader2, Send, Bell, RefreshCcw, Search, Filter, ListFilter } from "lucide-react";
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

type FilterStatus = "semua" | "pending" | "proses" | "selesai" | "dibatalkan";

export default function DashboardList({ initialPesanan }: { initialPesanan: Pesanan[] }) {
  const [pesanan, setPesanan] = useState<Pesanan[]>(initialPesanan);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterStatus>("semua");
  const [searchQuery, setSearchQuery] = useState("");
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
    const { data } = await supabase
      .from("pesanan")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setPesanan(data);
    setIsRefreshing(false);
  };

  useEffect(() => {
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
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  // Filtering Logic
  const filteredPesanan = useMemo(() => {
    return pesanan.filter((item) => {
      const matchesStatus = activeTab === "semua" || item.status === activeTab;
      const matchesSearch = 
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.whatsapp.includes(searchQuery) ||
        item.layanan.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [pesanan, activeTab, searchQuery]);

  // Counts for each category
  const counts = useMemo(() => ({
    semua: pesanan.length,
    pending: pesanan.filter(p => p.status === "pending").length,
    proses: pesanan.filter(p => p.status === "proses").length,
    selesai: pesanan.filter(p => p.status === "selesai").length,
    dibatalkan: pesanan.filter(p => p.status === "dibatalkan").length,
  }), [pesanan]);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    setLoadingId(id);
    try {
      await updateOrderStatus(id, newStatus);
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Gagal mengubah status.");
    } finally {
      setLoadingId(null);
    }
  };

  const openWhatsApp = (whatsapp: string, nama: string) => {
    let cleaned = whatsapp.replace(/\D/g, "");
    if (cleaned.startsWith("0")) {
      cleaned = "62" + cleaned.slice(1);
    } else if (!cleaned.startsWith("62")) {
      cleaned = "62" + cleaned;
    }
    const message = encodeURIComponent(`Halo ${nama}, ini dari Admin Repairman Electronic. Terkait pesanan servis Anda:`);
    window.open(`https://wa.me/${cleaned}?text=${message}`, "_blank");
  };

  const tabs: {id: FilterStatus; label: string; icon: any; color: string}[] = [
    { id: "semua", label: "Semua", icon: ListFilter, color: "bg-slate-100 text-slate-700" },
    { id: "pending", label: "Pending", icon: Clock, color: "bg-amber-100 text-amber-700" },
    { id: "proses", label: "Proses", icon: Loader2, color: "bg-blue-100 text-blue-700" },
    { id: "selesai", label: "Selesai", icon: CheckCircle2, color: "bg-emerald-100 text-emerald-700" },
    { id: "dibatalkan", label: "Batal", icon: XCircle, color: "bg-rose-100 text-rose-700" },
  ];

  return (
    <div className="space-y-6 relative">
      {/* Search & Refresh Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            placeholder="Cari nama, WA, atau layanan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-steel outline-none transition-all"
          />
        </div>
        <button 
          onClick={refreshData}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600 disabled:opacity-50 shrink-0"
        >
          <RefreshCcw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
          {isRefreshing ? "Menyegarkan..." : "Segarkan"}
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-2 -mx-2 px-2 gap-2 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap shrink-0 border-2 ${
              activeTab === tab.id 
                ? "bg-brand-navy border-brand-navy text-white shadow-md scale-[1.02]" 
                : "bg-white border-transparent text-slate-500 hover:bg-slate-50"
            }`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "" : tab.id === "proses" ? "animate-spin" : ""}`} />
            {tab.label}
            <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${
              activeTab === tab.id ? "bg-white/20 text-white" : tab.color
            }`}>
              {counts[tab.id]}
            </span>
          </button>
        ))}
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

      {/* Orders List */}
      <div className="space-y-4">
        {!filteredPesanan.length ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-slate-100 shadow-sm">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-slate-500 font-bold">Tidak ada pesanan</p>
            <p className="text-sm text-slate-400 mt-1">
              {searchQuery ? `Tidak ada hasil untuk "${searchQuery}"` : `Belum ada pesanan di kategori ${activeTab}`}
            </p>
          </div>
        ) : (
          filteredPesanan.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="space-y-3 flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-light transition-colors">
                      <User className="w-5 h-5 text-brand-steel" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-brand-navy truncate">
                        {item.nama}
                      </p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        {new Date(item.created_at).toLocaleString("id-ID", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Phone className="w-3.5 h-3.5 text-brand-teal" />
                      {formatPhone(item.whatsapp)}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <MessageSquare className="w-3.5 h-3.5 text-brand-teal" />
                      {item.layanan}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mt-2">
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      &ldquo;{item.keluhan}&rdquo;
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 min-w-[200px]">
                  <div className="flex justify-end">
                    <StatusBadge status={item.status} />
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => openWhatsApp(item.whatsapp, item.nama)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm shadow-emerald-100 transition-all active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      Hubungi WA
                    </button>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        title="Proses"
                        onClick={() => handleStatusUpdate(item.id, "proses")}
                        disabled={loadingId === item.id || item.status === "proses"}
                        className={`flex items-center justify-center p-2.5 rounded-xl transition-all ${
                          item.status === "proses"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                        }`}
                      >
                        {loadingId === item.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Clock className="w-4 h-4" />}
                      </button>
                      <button
                        title="Selesai"
                        onClick={() => handleStatusUpdate(item.id, "selesai")}
                        disabled={loadingId === item.id || item.status === "selesai"}
                        className={`flex items-center justify-center p-2.5 rounded-xl transition-all ${
                          item.status === "selesai"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                      <button
                        title="Batal"
                        onClick={() => handleStatusUpdate(item.id, "dibatalkan")}
                        disabled={loadingId === item.id || item.status === "dibatalkan"}
                        className={`flex items-center justify-center p-2.5 rounded-xl transition-all ${
                          item.status === "dibatalkan"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-rose-50 text-rose-600 hover:bg-rose-100"
                        }`}
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const configs: Record<string, { label: string; icon: any; class: string }> = {
    pending: { label: "Menunggu", icon: Clock, class: "bg-amber-100 text-amber-700 border-amber-200" },
    proses: { label: "Proses", icon: Loader2, class: "bg-blue-100 text-blue-700 border-blue-200" },
    selesai: { label: "Selesai", icon: CheckCircle2, class: "bg-emerald-100 text-emerald-700 border-emerald-200" },
    dibatalkan: { label: "Dibatalkan", icon: XCircle, class: "bg-rose-100 text-rose-700 border-rose-200" },
  };

  const config = configs[status] || { label: status, icon: Filter, class: "bg-slate-100 text-slate-700 border-slate-200" };
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border-2 ${config.class}`}>
      <Icon className={`w-3.5 h-3.5 ${status === "proses" ? "animate-spin" : ""}`} />
      {config.label}
    </span>
  );
}
