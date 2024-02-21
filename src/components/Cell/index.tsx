"use client";

import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import { Suspense, useContext } from "react";
import LoadingCell from "./LoadingCell";
import LoadedCell from "./LoadedCell";
import { AppContext } from "../App";

export type CellProps = {
  disabled?: boolean;
  index: number;
  initialGuess?: Pokemon;
  guesses: (undefined | Pokemon)[];
  onGuess: (pokemon: Pokemon, categoryIndex: number) => void;
  categories: Category[];
};

export default function Cell({
  disabled = false,
  index,
  initialGuess,
  guesses,
  onGuess,
  categories,
}: CellProps) {
  const { pokedex } = useContext(AppContext);

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
        fallback={<LoadingCell isSuccess={isSuccess} pokemon={pokemon} />}
      >
        <LoadedCell index={index} pokemon={pokemon} isSuccess={isSuccess} />
      </Suspense>
    </div>
  );
}
