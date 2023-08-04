"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      className="w-full rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
      onClick={() => void signOut()}
    >
      Log Out
    </button>
  );
}
