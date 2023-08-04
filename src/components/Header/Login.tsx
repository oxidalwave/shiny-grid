"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <button
      className="w-full rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
      onClick={() => void signIn()}
    >
      Log In to share your grid
    </button>
  );
}
