"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { ContinueWithGoogle } from "../continue-with-google";

export function ModalLogin() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a Profile</DialogTitle>
          <DialogDescription>
            by continuing you agree to our privacy policy and Terms of service
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <ContinueWithGoogle />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
