import useOutletTypedContext from "hooks/useOutletContext";
import { GitHub } from "react-feather";

export default function Index() {
  const { supabase } = useOutletTypedContext();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) console.log("error", error);
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
