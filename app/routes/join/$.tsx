import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <div className="flex w-full h-screen items-center justify-center bg-primary-900">
      <SignUp />
    </div>
  );
}
