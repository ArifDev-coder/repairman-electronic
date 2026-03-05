"use server";

import { createSupabaseServerClient } from "@/lib/supabase/serverClient";
import { revalidatePath } from "next/cache";

export async function updateOrderStatus(id: string, status: string) {
  const supabase = await createSupabaseServerClient();
  const { data: claimsData } = await supabase.auth.getClaims();

  if (!claimsData?.claims?.sub) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase
    .from("pesanan")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Error updating status:", error);
    throw new Error("Failed to update status");
  }

  revalidatePath("/admin/dashboard");
  return { success: true };
}
