"use client";

import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import IncorrectCell from "./IncorrectCell";
import CorrectCell from "./CorrectCell";

export interface CellProps {
  disableInput?: boolean;
  seed: string;
  index: number;
  pokedex: Pokemon[];
  initialGuess?: Pokemon;
  guesses: (undefined | Pokemon)[];
  onGuess: (
    pokemon: Pokemon,
    categoryIndex: number,
  ) => void;
  categories: Category[];
}

export default function Cell({
  disableInput = false,
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
        disableInput={disableInput}
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
