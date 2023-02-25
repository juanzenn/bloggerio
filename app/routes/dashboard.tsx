import { Link, Outlet } from "@remix-run/react";

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
      </header>

      <Outlet />
    </div>
  );
}
