import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="flex w-full h-screen items-center justify-center bg-primary-900">
      <SignIn />
    </div>
  );
}
