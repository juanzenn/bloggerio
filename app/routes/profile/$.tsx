import { UserProfile } from "@clerk/remix";

export default function $() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-primary-900 py-12">
      <UserProfile />
    </div>
  );
}
