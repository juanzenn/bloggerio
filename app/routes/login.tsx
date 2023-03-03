import { redirect } from "@remix-run/node";
import useOutletTypedContext from "hooks/useOutletContext";
import { GitHub } from "react-feather";
import supabaseServer from "utils/supabase.server";

import type { LoaderArgs } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const { data } = await supabaseServer({
    request: request,
    response,
  }).auth.getSession();

  if (data.session) {
    return redirect("/dashboard");
  }

  return null;
};

export default function Index() {
  const navigate = useNavigate();
  const { supabase } = useOutletTypedContext();

  supabase.auth.onAuthStateChange((event, session) => {
    if (session) navigate("/dashboard");
  });

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  return (
    <main className="h-full flex items-center justify-center">
      <section className="text-center space-y-6">
        <h1 className="font-bold text-4xl">Welcome to Blogger.io</h1>

        <button
          onClick={handleLogin}
          className="mx-auto py-2 px-6 rounded-md flex gap-4 items-center border border-slate-600 hover:bg-white hover:bg-opacity-5 transition-colors font-medium"
        >
          Sign in with Github <GitHub size={20} />
        </button>
      </section>
    </main>
  );
}
