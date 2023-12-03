import Link from "next/link";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="w-full flex justify-between">
      <Logo />
      <div className="flex gap-4 items-center">
        <Link
          href={"/login"}
          className={cn(
            buttonVariants({
              variant: "default",
            })
          )}
        >
          Login
        </Link>
        <Link
          className={cn(
            buttonVariants({
              variant: "outline",
            })
          )}
          href={"/register"}
        >
          Register
        </Link>
      </div>
    </header>
  );
}
