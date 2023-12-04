"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { useSession } from "next-auth/react";
import { ModalLogin } from "./modal/modal-login";
import { UserNav } from "./user-nav";

export function SiteHeader() {
  const session = useSession();
  return (
    <header className="w-full flex justify-between">
      <Logo />
      <div className="flex gap-4 items-center">
        {session?.data?.user?.email ? (
          <UserNav
            imageUrl={session?.data?.user?.image ?? ""}
            email={session?.data?.user?.email ?? "NO EMAIL"}
            name={`${session?.data?.user?.name}`}
          />
        ) : (
          <ModalLogin />
        )}
      </div>
    </header>
  );
}
