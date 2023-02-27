import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
  const { sessionId } = await getAuth(args);

  // if (!sessionId) {
  //   return redirect("/login");
  // }

  return null;
};

export default function Dashboard() {
  return (
    <div>
      <header className="flex items-center py-2 px-6 bg-gray-100 gap-4">
        <Link
          to="/"
          className="text-primary font-extrabold text-xl hover:underline"
        >
          Home
        </Link>

        <nav>This is my navigation</nav>

        <div className="ml-auto">
          <UserButton />
        </div>
      </header>

      <Outlet />
    </div>
  );
}
