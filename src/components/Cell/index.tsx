"use client";

import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import { Suspense } from "react";
import LoadingCell from "./LoadingCell";
import LoadedCell from "./LoadedCell";
import { CategoryId, categories, tests } from "~/lib/revisedCategories";

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

  return (
    <div className="w-full">
      <Suspense
        fallback={<LoadingCell success={isSuccess} pokemon={pokemon} />}
      >
        <LoadedCell
          index={index}
          seed={seed}
          guess={pokemon}
          isSuccess={isSuccess}
        />
      </Suspense>
    </div>
  );
}
