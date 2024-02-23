import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import { Suspense } from "react";
import LoadedCell from "./LoadedCell";
import { type CategoryId, tests } from "~/lib/revisedCategories";
import CellImage from "./CellImage";

export interface CellProps {
  disabled?: boolean;
  seed: string;
  index: number;
  pokedex: Pokemon[];
  initialGuess?: Pokemon;
  guesses: (undefined | Pokemon)[];
  onGuess: (pokemon: Pokemon, categoryIndex: number) => void;
  categoryIds: CategoryId[];
}

export default function Cell({
  disabled = false,
  seed,
  index,
  pokedex,
  initialGuess,
  guesses,
  onGuess,
  categoryIds,
}: CellProps) {
  const pokemon = pokedex.find((p) => initialGuess?.id === p.id);

  function handleGuess(p: Pokemon) {
    onGuess(p, index);
  }

  if (!pokemon) {
    return (
      <PendingCell
        disabled={disabled}
        pokedex={pokedex.filter(
          (p) => !guesses.find((g) => g?.nationalDexId === p.nationalDexId),
        )}
        onGuess={handleGuess}
        categoryIds={categoryIds}
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
