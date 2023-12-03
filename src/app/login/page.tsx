import { ContinueWithGoogle } from "@/components/continue-with-google";

export default function Login() {
  return (
    <div className="max-w-sm space-y-6 border p-10 mx-auto">
      <h1 className="text-2xl">Create Profile</h1>
      <ContinueWithGoogle />
    </div>
  );
}
