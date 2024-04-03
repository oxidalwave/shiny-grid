"use client";

import { type Pokemon } from "~/lib/data/dex";
import { api } from "~/utils/api";
import Image from "next/image";
import { useMemo } from "react";

export interface LoadedCellProps {
  seed: string;
  index: number;
  guess: Pokemon;
}

export default function LoadedCell({ seed, index, guess }: LoadedCellProps) {
  const vars = useMemo(
    () => ({
      seed,
      categoryIndex: index,
      pokemonId: guess.id,
    }),
    [seed, index, guess.id],
  );

  const [data] = api.guess.useSuspenseQuery(vars);

  const p = Math.floor(data.percent * 100);

  return (
    <>
      {!isNaN(p) && (
        <div className="justify-top absolute rounded bg-slate-800 bg-opacity-60 px-8 py-2">
          {p}%
        </div>
      )}
      <Image
        unoptimized
        alt={guess.name}
        src={guess.imageUrl ?? ""}
        width={128}
        height={128}
      />
      <div className="rounded bg-slate-800 bg-opacity-60 px-2">
        {guess.name}
      </div>
    </>
  );
}
