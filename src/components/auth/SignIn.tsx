"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return <button onClick={() => void signIn("DISCORD")}>Log in</button>;
}
