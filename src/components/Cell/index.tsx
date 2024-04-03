import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import { Suspense } from "react";
import LoadedCell from "./LoadedCell";
import { type CategoryId, tests } from "~/lib/categories";
import CellImage from "./CellImage";
import { useGuessContext } from "~/lib/contexts/GuessContext";

export interface CellProps {
  seed: string;
  index: number;
  pokedex: Pokemon[];
  initialGuess?: Pokemon;
  categoryIds: CategoryId[];
}

export default function Cell({
  seed,
  index,
  pokedex,
  initialGuess,
  categoryIds,
}: CellProps) {
  const [guesses] = useGuessContext();

  const pokemon = pokedex.find((p) => initialGuess?.id === p.id);

  if (!pokemon) {
    return (
      <PendingCell
        pokedex={pokedex.filter(
          (p) => !guesses.find((g) => g?.nationalDexId === p.nationalDexId),
        )}
        categoryIds={categoryIds}
        seed={seed}
        categoryIndex={index}
      />
    );
  }

  const isSuccess = categoryIds.every((c) => tests[c]?.(pokemon));

  const child = (
    <div className="h-full flex flex-col justify-center items-center">
      <Suspense fallback={<CellImage pokemon={pokemon} />}>
        <LoadedCell index={index} seed={seed} guess={pokemon} />
      </Suspense>
    </div>
  );

  return (
    <div className="w-full">
      {isSuccess && <div className="bg-green-500">{child}</div>}
      {!isSuccess && <div className="bg-red-500">{child}</div>}
    </div>
  );
}
