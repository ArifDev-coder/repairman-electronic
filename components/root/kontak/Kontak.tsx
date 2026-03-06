"use client";

import {
  MessageCircle,
  MapPin,
  ArrowRight,
  Loader2,
  Check,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import { WAKIRIM, URLWA, NoWa } from "@/data/NoHp";
import { formatPhone } from "@/lib/utils/formatPhone";

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    pesan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      ((window.location.href = `${WAKIRIM}Halo, Saya ${formData.nama}. ${formData.pesan}`),
        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000));
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-slate-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Hubungi Kami
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Punya perangkat elektronik yang bermasalah? Konsultasikan gratis
            sekarang. Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href={URLWA}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-10 bg-white rounded-2xl border-2 border-slate-100 hover:border-emerald-400 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="p-4 bg-emerald-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-14 h-14 text-emerald-600" />
            </div>
            <h3 className="font-bold text-xl text-brand-navy mb-2">
              Chat WhatsApp
            </h3>
            <p className="text-slate-600 text-center text-sm">
              Untuk informasi layanan, estimasi biaya, dan jadwal servis
            </p>
            <p className="text-emerald-500 mt-8">
              +62 {formatPhone(NoWa).substring(1)}
            </p>
          </a>

          <div className="flex flex-col items-center p-10 bg-brand-navy text-white rounded-2xl shadow-lg">
            <div className="p-4 bg-white/10 rounded-2xl mb-6">
              <MapPin className="w-14 h-14 text-brand-steel" />
            </div>
            <h3 className="font-bold text-xl mb-2">Lokasi Workshop</h3>
            <div className="text-slate-300 text-center text-sm leading-relaxed">
              <p>
                Jalan Gunung Gangsir, Gesing RT001 RW008, Randupitu, Kec.
                Gempol, Pasuruan, Jawa Timur 67155.
              </p>
              <p className="mt-2">Sebelah utara PT Berkat Ganda Sentosa.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
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
                htmlFor="keluhan"
                className="block mb-2 text-sm font-semibold text-brand-navy"
              >
                Pesan
              </label>
              <textarea
                value={formData.pesan}
                onChange={(e) =>
                  setFormData({ ...formData, pesan: e.target.value })
                }
                id="keluhan"
                rows={4}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-slate-400 text-sm resize-none"
                placeholder="Ceritakan masalah perangkat Anda secara singkat..."
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy/90 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  Kirim Pesan
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
