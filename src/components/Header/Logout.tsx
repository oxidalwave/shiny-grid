"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

export default function Logout() {
  return (
    <Button className="w-full" onClick={() => void signOut()}>
      Log Out
    </Button>
  );
}
