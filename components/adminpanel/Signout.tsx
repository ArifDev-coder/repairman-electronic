"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase/browserClient";
import { useRouter } from "next/navigation";

const Signout = () => {
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/admin");
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy hover:bg-slate-100 rounded-lg transition-colors"
    >
      Keluar
    </button>
  );
};

export default Signout;
