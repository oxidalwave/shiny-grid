"use client";

import Image from "next/image";
import { use } from "react";
import { type Pokemon } from "~/lib/data/dex";
import { api } from "~/utils/api";
import { AppContext } from "../App";

export type LoadedCellProps = {
  index: number;
  pokemon: Pokemon;
  isSuccess: boolean;
};

const successCn =
  "h-full flex flex-col justify-center items-center bg-green-500";
const errorCn = "h-full flex flex-col justify-center items-center bg-red-500";

export default function LoadedCell({
  index,
  pokemon,
  isSuccess,
}: LoadedCellProps) {
  const { seed } = use(AppContext);

  const [data] = api.guess.useSuspenseQuery({
    seed,
    categoryIndex: index,
    pokemonId: pokemon.id,
  });

  const percent = Math.floor(data.percent * 100);

  return (
    <div className={isSuccess ? successCn : errorCn}>
      {!isNaN(percent) && (
        <div className="justify-top absolute rounded bg-slate-800 bg-opacity-60 px-8 py-2">
          {percent}%
        </div>
      )}
      <Image
        unoptimized
        alt={pokemon.name}
        src={pokemon.imageUrl ?? ""}
        width={128}
        height={128}
      />
      <div className="rounded bg-slate-800 bg-opacity-60 px-2">
        {pokemon.name}
      </div>
    </div>
  );
}
