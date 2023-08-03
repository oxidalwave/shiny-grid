"use client";

import { useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import IncorrectCell from "./IncorrectCell";
import CorrectCell from "./CorrectCell";

export interface CellProps {
  seed: string;
  index: number;
  pokedex: Pokemon[];
  initialGuess?: Pokemon;
  guesses: Pokemon[];
  onGuess: (
    pokemon: Pokemon,
    categories: Category[],
    categoryIndex: number
  ) => void;
  categories: Category[];
}

export default function Cell({
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
    onGuess(p, categories, index);
  }

  if (!pokemon) {
    return (
      <PendingCell
        pokedex={pokedex.filter(
          (p) => !guesses.find((g) => g.nationalDexId === p.nationalDexId)
        )}
        onGuess={handleGuess}
        categories={categories}
      />
    );
  }

  if (categories.every((c) => c.test(pokemon))) {
    return (
      <div className="w-full">
        <CorrectCell index={index} seed={seed} guess={pokemon} />
      </div>
    );
  }
  return (
    <div className="w-full">
      <IncorrectCell index={index} seed={seed} guess={pokemon} />
    </div>
  );
}
