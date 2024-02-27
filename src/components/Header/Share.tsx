"use client";

import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { Button } from "~/components/ui/button";

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
    <Button className="w-full" onClick={handleShare}>
      Share your grid
    </Button>
  );
}
