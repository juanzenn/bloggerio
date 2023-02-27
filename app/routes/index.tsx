import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  // const { sessionId } = await getAuth(args);
  // if (sessionId) return redirect("/dashboard");
  // else return redirect("/login");

  return null;
};

export default function Index() {
  return (
    <div>
      <h1>Remix + Clerk</h1>
    </div>
  );
}
