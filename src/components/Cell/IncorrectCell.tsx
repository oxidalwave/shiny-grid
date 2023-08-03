import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { z } from "zod";
import { type Pokemon } from "~/lib/data/dex";

export interface IncorrectCellProps {
  seed: string;
  index: number;
  guess: Pokemon;
}

export default function IncorrectCell({
  seed,
  index,
  guess,
}: IncorrectCellProps) {
  const { data, isLoading } = useQuery([], () =>
    fetch(
      `https://${window.location.host}/api/grids/${seed}/categories/${index}/guesses/${guess.id}`
    ).then((r) =>
      r.json().then((j) => z.object({ percent: z.number() }).parse(j))
    )
  );

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center bg-red-500">
        <Image
          alt={guess.name}
          src={guess.imageUrl ?? ""}
          width={128}
          height={128}
        />
      </div>
    );
  }

  const percent = data ? Math.floor(data?.percent * 100) : 0;

  return (
    <div className="h-full flex justify-center items-center bg-red-500">
      <div className="absolute bg-slate-800 bg-opacity-60 rounded py-2 px-8 justify-top">
        {percent}%
      </div>
      <Image
        alt={guess.name}
        src={guess.imageUrl ?? ""}
        width={128}
        height={128}
      />
    </div>
  );
}
