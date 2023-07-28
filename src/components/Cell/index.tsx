"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import PendingCell from "./PendingCell";
import IncorrectCell from "./IncorrectCell";
import CorrectCell from "./CorrectCell";

export interface CellProps {
  index: number;
  pokedex: Pokemon[];
  guesses: (Pokemon | undefined)[];
  setGuesses: Dispatch<SetStateAction<(Pokemon | undefined)[]>>;
  categories: Category[];
}

export default function Cell(props: CellProps) {
  const [guess, setGuess] = useState<Pokemon | undefined>(undefined);

  if (!guess) {
    return <PendingCell {...props} setGuess={setGuess} />;
  }

  if (props.categories[0]?.test(guess) && props.categories[1]?.test(guess)) {
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
