import Image from "next/image";
import { type Pokemon } from "~/lib/data/dex";
import { prisma } from "~/server/db";

export interface LoadedCellProps {
  seed: string;
  index: number;
  guess: Pokemon;
}

export default async function LoadedCell({
  seed,
  index,
  guess,
}: LoadedCellProps) {
  const [totalGuesses, guesses] = await Promise.all([
    prisma.userAnswer.count({
      where: {
        seed: seed,
        categoryIndex: index,
      },
    }),
    prisma.userAnswer.count({
      where: {
        seed: seed,
        categoryIndex: index,
        pokemonId: guess.id,
      },
    }),
  ]);

  const percent = Math.floor((guesses / totalGuesses) * 100);

  return (
    <>
      {!isNaN(percent) && (
        <div className="justify-top absolute rounded bg-slate-800 bg-opacity-60 px-8 py-2">
          {percent}%
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
