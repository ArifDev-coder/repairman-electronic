"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ModalPesanan from "./ModalPesanan";

const FormPesanan = () => {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    layanan: "",
    keluhan: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [waLink, setWaLink] = useState("");

  const handleSubmitPesanan = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/pesan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const hasil = await response.json();

    if (hasil.success) {
      console.log("Data berhasil masuk ke database!");

      const pesanWA = `Halo, saya ${formData.nama} ingin servis ${formData.layanan}. Keluhan: ${formData.keluhan}`;
      setWaLink(
        `https://wa.me/6281231829437?text=${encodeURIComponent(pesanWA)}`,
      );
      setShowModal(true);
    } else {
      console.error("Error: " + hasil.error);
    }
  };

  return (
    <div className="max-w-md mx-auto md:bg-white sm:p-8 rounded-2xl sm:shadow-lg sm:border sm:border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-brand-navy mb-2">
          Form Pemesanan Layanan
        </h2>
        <p className="text-sm text-gray-500">
          Lengkapi data di bawah ini agar tim kami bisa segera menghubungi Anda.
        </p>
      </div>

      <form onSubmit={handleSubmitPesanan}>
        {/* Nama Lengkap */}
        <div className="mb-6">
          <label
            htmlFor="nama"
            className="block mb-2 text-sm font-semibold text-brand-navy"
          >
            Nama Lengkap
          </label>
          <input
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            type="text"
            id="nama"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-gray-400 text-sm"
            placeholder="Contoh: Budi Santoso"
            required
          />
        </div>

        {/* No HP / WhatsApp */}
        <div className="mb-6">
          <label
            htmlFor="noHP"
            className="block mb-2 text-sm font-semibold text-brand-navy"
          >
            Nomor WhatsApp (<span className="text-red-500">Nomor Aktif</span>)
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, whatsapp: e.target.value })
            }
            type="tel"
            id="noHP"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-gray-400 text-sm"
            placeholder="0812xxxx"
            required
          />
        </div>

        {/* Jenis Layanan */}
        <div className="mb-6">
          <label
            htmlFor="layanan"
            className="block mb-2 text-sm font-semibold text-brand-navy"
          >
            Layanan yang Dibutuhkan
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, layanan: e.target.value })
            }
            type="text"
            id="layanan"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-gray-400 text-sm"
            placeholder="Contoh: Servis TV"
            required
          />
        </div>

        {/* Detail Keluhan */}
        <div className="mb-6">
          <label
            htmlFor="keluhan"
            className="block mb-2 text-sm font-semibold text-brand-navy"
          >
            Detail Kendala
          </label>
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, keluhan: e.target.value })
            }
            id="keluhan"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-steel focus:border-brand-steel outline-none transition-all placeholder:text-gray-400 text-sm resize-none"
            placeholder="Ceritakan masalah perangkat Anda secara singkat..."
          ></textarea>
        </div>

        {/* Terms & Condition Policy */}
        <div className="flex items-start mb-8 italic">
          <p className="text-xs text-gray-500 leading-relaxed">
            *Dengan menekan tombol submit, Anda menyetujui{" "}
            <span className="text-brand-navy font-bold">
              Syarat & Ketentuan
            </span>{" "}
            layanan kami.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transform active:scale-[0.98] transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2"
        >
          Konfirmasi Pesanan
          <ArrowRight />
        </button>
      </form>

      {showModal && <ModalPesanan urlwa={waLink} />}
    </div>
  );
};

export default FormPesanan;
