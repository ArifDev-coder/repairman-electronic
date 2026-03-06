import { createSupabaseServerClient } from "@/lib/supabase/serverClient";
import { NextResponse } from "next/server";

const MAX_LENGTHS = {
  nama: 200,
  whatsapp: 20,
  layanan: 100,
  keluhan: 2000,
} as const;

function isValidString(value: unknown, maxLength: number): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.length <= maxLength
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Data tidak valid. Silakan coba lagi." },
        { status: 400 }
      );
    }

    const { nama, whatsapp, layanan, keluhan } = body;

    if (!isValidString(nama, MAX_LENGTHS.nama)) {
      return NextResponse.json(
        {
          success: false,
          error: "Nama lengkap wajib diisi dan maksimal 200 karakter.",
        },
        { status: 400 }
      );
    }

    if (!isValidString(whatsapp, MAX_LENGTHS.whatsapp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Nomor WhatsApp wajib diisi dan maksimal 20 karakter.",
        },
        { status: 400 }
      );
    }

    if (!isValidString(layanan, MAX_LENGTHS.layanan)) {
      return NextResponse.json(
        {
          success: false,
          error: "Jenis layanan wajib diisi dan maksimal 100 karakter.",
        },
        { status: 400 }
      );
    }

    if (!isValidString(keluhan, MAX_LENGTHS.keluhan)) {
      return NextResponse.json(
        {
          success: false,
          error: "Detail kendala wajib diisi dan maksimal 2000 karakter.",
        },
        { status: 400 }
      );
    }

    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase
      .from("pesanan")
      .insert([
        {
          nama: nama.trim(),
          whatsapp: whatsapp.trim(),
          layanan: layanan.trim(),
          keluhan: keluhan.trim(),
          status: "pending",
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Terjadi kesalahan. Silakan coba lagi.";
    console.error(err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
