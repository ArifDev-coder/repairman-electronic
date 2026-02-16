import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

export default function StatusToko({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex flex-col gap-8">
      <div className={cn("flex items-center p-8 bg-green-50 rounded-2xl border-2 border-green-100  transition-all group gap-2 justify-center", isOpen ? "border-green-500" : "border-red-500")}>
        <h2 className="text-lg font-bold">Status Workshop: </h2>
        <div className="animate-pulse">
          {isOpen ? (
            <span className="text-sm font-bold uppercase tracking-wider text-green-600">
              Workshop Buka
            </span>
          ) : (
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Workshop Tutup
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center p-8 bg-brand-navy text-white rounded-2xl">
        <MapPin className="w-12 h-12 text-brand-steel mb-4" />
        <h3 className="font-bold text-lg">Lokasi Workshop</h3>
        <div className="text-sm text-slate-300 text-center">
          <p>
            Jalan Gunung Gangsir, Gesing RT001 RW008, Randupitu, Kec. Gempol,
            Pasuruan, Jawa Timur 67155.
          </p>
          <p>Sebelah Utara PT Berkat Ganda Sentosa.</p>
        </div>
      </div>
    </div>
  );
}
