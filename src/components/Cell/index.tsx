import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import { Suspense } from "react";
import LoadedCell from "./LoadedCell";
import { type CategoryId, tests } from "~/lib/categories";
import CellImage from "./CellImage";
import { useGuessContext } from "~/lib/contexts/GuessContext";
import clsx from "clsx";

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

  return (
    <div className="w-full">
      <div
        className={clsx(
          "h-full flex flex-col justify-center items-center",
          isSuccess ? "bg-green-500" : "bg-red-500",
        )}
      >
        <Suspense fallback={<CellImage pokemon={pokemon} />}>
          <LoadedCell index={index} seed={seed} guess={pokemon} />
        </Suspense>
      </div>
    </div>
  );
}
