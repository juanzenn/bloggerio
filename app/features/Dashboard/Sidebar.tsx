import { Power } from "react-feather";

export default function Sidebar() {
  return (
    <div className="flex-1 max-w-xs bg-gray-900 h-full p-4 flex flex-col">
      <a
        href="/"
        className="block text-3xl font-bold text-primary-100"
        aria-label="Blogger.io - Home"
      >
        Blogger.io
      </a>

      <LogoutButton />
    </div>
  );
}

function LogoutButton() {
  return (
    <form method="post" action="/logout" className="mt-auto">
      <button
        type="submit"
        className="flex items-center gap-2 justify-center w-1/2 py-2 px-6 text-gray-400  border border-gray-400 rounded-md text-lg font-medium hover:bg-red-600 hover:text-white hover:border-red-500 transition-all"
      >
        Logout
        <Power size={16} />
      </button>
    </form>
  );
}
