"use client";

import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

export interface ShareProps {
  seed: string;
}

export default function Share({ seed }: ShareProps) {
  const session = useSession();

  function handleShare() {
    void navigator.clipboard
      .writeText(
        `${process.env.NEXT_PUBLIC_API_URL}/${seed}/${session.data?.user.name}`,
      )
      .then(() => toast("A sharable link has been copied to your clipboard!"));
  }

  return (
    <button
      onClick={handleShare}
      className="m-2 w-full rounded bg-slate-700 p-2 hover:bg-slate-800"
    >
      Share your grid
    </button>
  );
}
