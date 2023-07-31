"use client";

import { useState } from "react";
import Cell from "~/components/Cell";
import { type Pokemon } from "~/lib/data/dex";
import Export from "./Export";

import Category from "./Category";
import { getCategories } from "~/lib/getCategories";
import type Categor from "~/lib/categories";

interface Guess {
  pokemon: Pokemon;
  categories: Categor[];
}

export interface GridProps {
  dex: Pokemon[];
  seed: number;
}

export default function Grid({ dex, seed }: GridProps) {
  const categories = getCategories(seed);

  const [guesses, setGuesses] = useState<Guess[]>([]);

  function handleGuess(pokemon: Pokemon, categories: Categor[]) {
    setGuesses([...guesses, { pokemon, categories }]);
  }

  return (
    <div className="">
      <div className="grid grid-cols-4 divide-y divide-x divide-slate-500 border-b border-b-slate-500 border-r border-r-slate-500">
        <div className="h-12" />
        <Category category={categories[0]!} />
        <Category category={categories[1]!} />
        <Category category={categories[2]!} />
        <div className="h-20">
          <Category category={categories[3]!} />
        </div>
        <Cell
          categories={[categories[0]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
        <Cell
          categories={[categories[1]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
        <Cell
          categories={[categories[2]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
        <div className="h-20">
          <Category category={categories[4]!} />
        </div>
        <Cell
          categories={[categories[0]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
        <Cell
          categories={[categories[1]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
        <Cell
          categories={[categories[2]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
        <div className="h-20">
          <Category category={categories[5]!} />
        </div>
        <Cell
          categories={[categories[0]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
        <Cell
          categories={[categories[1]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
        <Cell
          categories={[categories[2]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={handleGuess}
        />
      </div>
      <Export seed={seed} guesses={guesses} />
    </div>
  );
}
