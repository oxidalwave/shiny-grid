"use client";

import { useState } from "react";
import { type Pokemon } from "~/lib/data/dex";
import Export from "./Export";

import { getCategories } from "~/lib/getCategories";
import type Categor from "~/lib/categories";
import Grid from "./Grid";

interface Guess {
  pokemon: Pokemon;
  categories: Categor[];
}

export interface GridProps {
  dex: Pokemon[];
  seed: number;
}

export default function App({ dex, seed }: GridProps) {
  const categories = getCategories(seed);

  const [guesses, setGuesses] = useState<Guess[]>([]);

  function handleGuess(pokemon: Pokemon, categories: Categor[]) {
    setGuesses([...guesses, { pokemon, categories }]);
  }

  return (
    <div className="">
      <Grid
        categories={categories}
        dex={dex}
        guesses={guesses}
        onGuess={handleGuess}
      />
      <Export seed={seed} guesses={guesses} />
    </div>
  );
}
