import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { z } from "zod";
import { type Pokemon } from "~/lib/data/dex";

export interface CorrectCellProps {
  seed: string;
  index: number;
  guess: Pokemon;
}

export default function CorrectCell({ seed, index, guess }: CorrectCellProps) {
  const { data } = useQuery(
    ["guesses", seed, index, guess.id],
    () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/grids/${seed}/categories/${index}/guesses/${guess.id}`,
      ).then((r) =>
        r.json().then((j) => z.object({ percent: z.number() }).parse(j)),
      ),
    { suspense: true },
  );

  const percent = data ? Math.floor(data?.percent * 100) : 0;

  return (
    <div className="h-full flex flex-col justify-center items-center bg-green-500">
      <div className="absolute bg-slate-800 bg-opacity-60 rounded py-2 px-8 justify-top">
        {percent}%
      </div>
      <Image
        unoptimized
        alt={guess.name}
        src={guess.imageUrl ?? ""}
        width={128}
        height={128}
      />
      <div className="bg-slate-800 bg-opacity-60 px-2 rounded">
        {guess.name}
      </div>
    </div>
  );
}
