"use client";

import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

export interface ShareProps {
  seed: string;
}

export default function Share({ seed }: ShareProps) {
  const session = useSession();

  function handleShare() {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/${seed}/${session.data?.user.name}`;
    void navigator.clipboard
      .writeText(url)
      .then(() => toast("A sharable link has been copied to your clipboard!"));
  }

  return (
    <button
      onClick={handleShare}
      className="w-full rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
    >
      Share your grid
    </button>
  );
}
