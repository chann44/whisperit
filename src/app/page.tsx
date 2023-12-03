"use client";

import { ModalLogin } from "@/components/modal/modal-login";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return <div>{data?.user?.email ? data.user.email : <ModalLogin />}</div>;
}
