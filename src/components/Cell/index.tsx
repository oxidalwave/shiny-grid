"use client";

import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import { Suspense } from "react";
import LoadingCell from "./LoadingCell";
import LoadedCell from "./LoadedCell";

export interface CellProps {
  disabled?: boolean;
  seed: string;
  index: number;
  pokedex: Pokemon[];
  initialGuess?: Pokemon;
  guesses: (undefined | Pokemon)[];
  onGuess: (pokemon: Pokemon, categoryIndex: number) => void;
  categories: Category[];
}

export default function Cell({
  disabled = false,
  seed,
  index,
  pokedex,
  initialGuess,
  guesses,
  onGuess,
  categories,
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
        categories={categories}
      />
    );
  }

  const isSuccess = categories.every((c) => c.test(pokemon));

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
