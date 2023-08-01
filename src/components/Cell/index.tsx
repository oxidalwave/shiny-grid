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
  guesses: {
    pokemon: Pokemon;
    categories: Category[];
  }[];
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
  guesses,
  onGuess,
  categories,
}: CellProps) {
  const [guess, setGuess] = useState<Pokemon | undefined>(undefined);

  function handleGuess(p: Pokemon) {
    setGuess(p);
    onGuess(p, categories, index);
  }

  if (!guess) {
    return (
      <PendingCell
        pokedex={pokedex.filter(
          (p) =>
            !guesses
              .map(({ pokemon }) => pokemon.nationalDexId)
              .includes(p.nationalDexId)
        )}
        onGuess={handleGuess}
        categories={categories}
      />
    );
  }

  if (categories.every((c) => c.test(guess))) {
    return (
      <div className="w-full">
        <CorrectCell guess={guess} />
      </div>
    );
  }
  return (
    <div className="w-full">
      <IncorrectCell guess={guess} />
    </div>
  );
}
