"use client";

import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";

export default function Login() {
  return (
    <Button className="w-full" onClick={() => void signIn()}>Log In to share your grid</Button>
  );
}
