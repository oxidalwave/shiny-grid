"use client";

import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import IncorrectCell from "./IncorrectCell";
import CorrectCell from "./CorrectCell";
import { Suspense } from "react";
import LoadingCell from "./LoadingCell";

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

  if (categories.every((c) => c.test(pokemon))) {
    return (
      <div className="w-full">
        <Suspense fallback={<LoadingCell success={true} pokemon={pokemon} />}>
          <CorrectCell index={index} seed={seed} guess={pokemon} />
        </Suspense>
      </div>
    );
  }
  return (
    <div className="w-full">
      <Suspense fallback={<LoadingCell success={true} pokemon={pokemon} />}>
        <IncorrectCell index={index} seed={seed} guess={pokemon} />
      </Suspense>
    </div>
  );
}
