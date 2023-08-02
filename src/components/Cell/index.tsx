"use client";

import { useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import IncorrectCell from "./IncorrectCell";
import CorrectCell from "./CorrectCell";

export interface CellProps {
  index: number;
  pokedex: Pokemon[];
  initialGuess?: string;
  guesses: string[];
  onGuess: (
    pokemon: Pokemon,
    categories: Category[],
    categoryIndex: number
  ) => void;
  categories: Category[];
}

export default function Cell({
  index,
  pokedex,
  initialGuess,
  guesses,
  onGuess,
  categories,
}: CellProps) {
  const pokemon = pokedex.find((p) => initialGuess === p.id);

  function handleGuess(p: Pokemon) {
    onGuess(p, categories, index);
  }

  if (!pokemon) {
    return (
      <PendingCell
        pokedex={pokedex.filter((p) => !guesses.includes(p.id))}
        onGuess={handleGuess}
        categories={categories}
      />
    );
  }

  if (categories.every((c) => c.test(pokemon))) {
    return (
      <div className="w-full">
        <CorrectCell guess={pokemon} />
      </div>
    );
  }
  return (
    <div className="w-full">
      <IncorrectCell guess={pokemon} />
    </div>
  );
}
