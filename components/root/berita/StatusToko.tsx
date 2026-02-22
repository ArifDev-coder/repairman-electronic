import { cn } from "@/lib/utils";
import { MapPin, Store, Clock } from "lucide-react";

export default function StatusToko({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div
        className={cn(
          "flex flex-col sm:flex-row items-center justify-center gap-4 p-8 rounded-2xl border-2 transition-all",
          isOpen
            ? "bg-emerald-50 border-emerald-200"
            : "bg-red-50 border-red-200",
        )}
      >
        <Store
          className={cn(
            "w-12 h-12 shrink-0",
            isOpen ? "text-emerald-600" : "text-red-600",
          )}
        />
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-brand-navy mb-1">
            Status Workshop
          </h2>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Clock className="w-4 h-4 text-slate-500" />
            {isOpen ? (
              <span className="font-semibold text-emerald-600">
                Sedang buka — Silakan datang atau hubungi kami
              </span>
            ) : (
              <span className="font-semibold text-red-600">
                Sedang tutup — Hubungi kami untuk jadwal
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-10 bg-white rounded-2xl shadow-lg border border-slate-100">
        <div className="p-3 bg-brand-steel/10 rounded-xl mb-6">
          <MapPin className="w-10 h-10 text-brand-steel" />
        </div>
        <h3 className="font-bold text-xl text-brand-navy mb-4">
          Lokasi Workshop
        </h3>
        <div className="text-slate-600 text-center leading-relaxed">
          <p>
            Jalan Gunung Gangsir, Gesing RT001 RW008, Randupitu, Kec. Gempol,
            Pasuruan, Jawa Timur 67155.
          </p>
          <p className="mt-2">Sebelah utara PT Berkat Ganda Sentosa.</p>
        </div>
      </div>
    </div>
  );
}
