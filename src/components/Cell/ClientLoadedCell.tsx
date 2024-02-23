import Image from "next/image";
import { type Pokemon } from "~/lib/data/dex";
import { api } from "~/utils/api";

export interface ClientLoadedCellProps {
  seed: string;
  index: number;
  guess: Pokemon;
}

export default function ClientLoadedCell({
  seed,
  index,
  guess,
}: ClientLoadedCellProps) {
  const [data] = api.guess.useSuspenseQuery({
    seed,
    categoryIndex: index,
    pokemonId: guess.id,
  });

  const percent = Math.floor(data.percent * 100);

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
