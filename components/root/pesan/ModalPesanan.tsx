"use client";

import Link from "next/link";
import { CheckCircle2, MessageCircle, X } from "lucide-react";

interface ModalPesananProps {
  urlwa: string;
}

const ModalPesanan: React.FC<ModalPesananProps> = ({ urlwa }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div
        className="relative bg-white rounded-3xl max-w-sm w-full p-8 shadow-2xl border border-slate-100 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-6">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>

          <h3 className="text-xl font-bold text-brand-navy mb-2">
            Pesanan Berhasil Dikirim!
          </h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Tim kami akan segera menghubungi Anda melalui WhatsApp. Klik tombol
            di bawah untuk langsung chat.
          </p>

          <Link
            href={urlwa}
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Buka WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalPesanan;
