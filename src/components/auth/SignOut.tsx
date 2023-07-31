"use client";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function SignOut() {
  const session = useSession();
  const [open, setOpen] = useState(false); // This should be a useRef but it's not hiding the dialog for some reason.

  return (
    <>
      <button className="p-2 bg-slate-900" onClick={() => setOpen(true)}>
        {session.data?.user.name}
      </button>
      {open && (
        <dialog className="bg-slate-700 rounded p-2 text-white flex flex-col gap-2">
          <button
            className="bg-slate-900 rounded p-2"
            onClick={() => void signOut()}
          >
            Sign Out
          </button>
          <button
            className="bg-slate-900 rounded p-2"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </dialog>
      )}
    </>
  );
}
