import LoginForm from "@/components/adminpanel/AdminLogin";
import { createSupabaseServerClient } from "@/lib/supabase/serverClient";
import { redirect } from "next/navigation";

const AdminLogin = async () => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getClaims();

  if (data?.claims?.sub) {
    redirect("/admin/dashboard");
  }

  return <LoginForm user={null} />;
};

export default AdminLogin;
