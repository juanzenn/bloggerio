import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
  const { sessionId } = await getAuth(args);

  if (!sessionId) {
    return redirect("/login");
  }

  return {};
};

export default function Dashboard() {
  return (
    <div>
      <header>
        <Link
          to="/"
          className="text-primary font-extrabold text-xl hover:underline"
        >
          Home
        </Link>

        <nav>This is my navigation</nav>

        <UserButton />
      </header>

      <Outlet />
    </div>
  );
}
