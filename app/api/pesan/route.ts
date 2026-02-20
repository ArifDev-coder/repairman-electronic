import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);

    const { nama, whatsapp, layanan, keluhan } = body;

    const { data, error } = await supabase
      .from("pesanan")
      .insert([
        {
          nama,
          whatsapp,
          layanan,
          keluhan,
          status: "pending",
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
