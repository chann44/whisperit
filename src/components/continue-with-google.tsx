"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { title } from "process";

export function ContinueWithGoogle() {
  const { toast } = useToast();
  return (
    <Button
      onClick={async () => {
        try {
          await signIn("google");
          toast({
            title: "Login Success",
            description: "Successfully crated your profile",
          });
        } catch (e) {
          toast({
            title: "Login Error",
            description: "Not able to create your profile",
          });
        }
      }}
      className="w-full"
      type="submit"
    >
      Continue with Google
    </Button>
  );
}
