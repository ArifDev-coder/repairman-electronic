"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import ModalPesanan from "./ModalPesanan";
import { NoWa, URLWA, WAKIRIM } from "@/data/NoHp";

const FormPesanan = () => {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    layanan: "",
    keluhan: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitPesanan = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/pesan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const hasil = await response.json();

      if (hasil.success) {
        const msg = `Halo, saya ${formData.nama} ingin servis ${formData.layanan}. Keluhan: ${formData.keluhan}`;
        setWaLink(`${WAKIRIM}${encodeURIComponent(msg)}`);
        setShowModal(true);
      } else {
        setError(hasil.error || "Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (err: any) {
      setError("Gagal mengirim pesanan. Periksa koneksi internet Anda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
          Form Pemesanan Layanan
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Lengkapi data di bawah ini agar tim kami dapat segera menghubungi Anda
          melalui WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmitPesanan} className="space-y-6">
        {error && (
          <div
            role="alert"
            className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm flex items-start gap-3"
          >
            <span className="shrink-0 mt-0.5">⚠</span>
            <p>{error}</p>
          </div>
        )}
        <div>
          <label
            htmlFor="nama"
            className="block mb-2 text-sm font-semibold text-brand-navy"
          >
            Nama Lengkap
          </label>
          <input
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            type="text"
            id="nama"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-slate-400 text-sm"
            placeholder="Contoh: Budi Santoso"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label
            htmlFor="noHP"
            className="block mb-2 text-sm font-semibold text-brand-navy"
          >
            Nomor WhatsApp{" "}
            <span className="text-red-500 font-normal">(nomor aktif)</span>
          </label>
          <input
            value={formData.whatsapp}
            onChange={(e) =>
              setFormData({ ...formData, whatsapp: e.target.value })
            }
            type="tel"
            id="noHP"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-slate-400 text-sm"
            placeholder="Contoh: 08123456789"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label
            htmlFor="layanan"
            className="block mb-2 text-sm font-semibold text-brand-navy"
          >
            Layanan yang Dibutuhkan
          </label>
          <input
            value={formData.layanan}
            onChange={(e) =>
              setFormData({ ...formData, layanan: e.target.value })
            }
            type="text"
            id="layanan"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-slate-400 text-sm"
            placeholder="Contoh: Servis TV, Perbaikan HP"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label
            htmlFor="keluhan"
            className="block mb-2 text-sm font-semibold text-brand-navy"
          >
            Detail Kendala
          </label>
          <textarea
            value={formData.keluhan}
            onChange={(e) =>
              setFormData({ ...formData, keluhan: e.target.value })
            }
            id="keluhan"
            rows={4}
            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-slate-400 text-sm resize-none"
            placeholder="Ceritakan masalah perangkat Anda secara singkat..."
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="text-xs text-slate-500 leading-relaxed italic">
          *Dengan menekan tombol kirim, Anda menyetujui Syarat & Ketentuan
          layanan kami.
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy/90 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              Konfirmasi Pesanan
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {showModal && <ModalPesanan urlwa={waLink} />}
    </div>
  );
};

export default FormPesanan;
