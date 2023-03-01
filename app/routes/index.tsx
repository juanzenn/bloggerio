import { Link } from "@remix-run/react";
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
    <div>
      <h1>New Remix App</h1>

      <Link
        to="/login"
        className="block w-fit rounded-md p-4 m-4 bg-primary-500"
      >
        Login page
      </Link>

      <button
        className="block w-fit rounded-md p-4 m-4 bg-primary-500"
        onClick={async () => await supabase.auth.signOut()}
      >
        Logout
      </button>

      <button
        onClick={handleLogin}
        className="mx-auto py-2 px-6 rounded-md flex gap-4 items-center border border-slate-600 hover:bg-white hover:bg-opacity-5 transition-colors font-medium"
      >
        Sign in with Github <GitHub size={20} />
      </button>
    </div>
  );
}
