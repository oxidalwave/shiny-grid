import Image from "next/image";
import { type Pokemon } from "~/lib/data/dex";
import { api } from "~/utils/api";

export interface CorrectCellProps {
  seed: string;
  index: number;
  guess: Pokemon;
}

export default function CorrectCell({ seed, index, guess }: CorrectCellProps) {
  const [data] = api.guess.useSuspenseQuery({
    seed,
    categoryIndex: index,
    pokemonId: guess.id,
  });

  const percent = data ? Math.floor(data * 100) : 0;

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
