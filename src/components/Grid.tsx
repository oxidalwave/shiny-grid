"use client";

import { useState } from "react";
import Cell from "~/components/Cell";
import { Generations } from "~/lib/categories/generations";
import { Stats } from "~/lib/categories/stats";
import { Types } from "~/lib/categories/types";
import { type Pokemon } from "~/lib/data/dex";
import Export from "./Export";

export interface GridProps {
  dex: Pokemon[];
  seed: number;
}

export default function Grid({ dex, seed }: GridProps) {
  const type1 = Types[seed % Types.length]!;
  const type2 = Types[(seed % Types.length) + 1]!;
  const type3 = Types[(seed % Types.length) + 2]!;
  const type4 = Types[(seed % Types.length) + 3]!;
  const generation = Generations[seed % Generations.length]!;
  const stats = Stats[seed % Stats.length]!;

  const categories = [type1, type2, generation, type3, type4, stats];

  const [guesses, setGuesses] = useState<(Pokemon | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  return (
    <div>
      <div className="grid grid-cols-4 divide-x divide-y">
        <div className="h-12" />
        <div>{categories[0]?.label}</div>
        <div>{categories[1]?.label}</div>
        <div>{categories[2]?.label}</div>
        <div className="h-12">{categories[3]?.label}</div>
        <Cell
          index={0}
          categories={[categories[0]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <Cell
          index={1}
          categories={[categories[1]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <Cell
          index={2}
          categories={[categories[2]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <div className="h-12">{categories[4]?.label}</div>
        <Cell
          index={3}
          categories={[categories[0]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <Cell
          index={4}
          categories={[categories[1]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <Cell
          index={5}
          categories={[categories[2]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <div className="h-12">{categories[5]?.label}</div>
        <Cell
          index={6}
          categories={[categories[0]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <Cell
          index={7}
          categories={[categories[1]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <Cell
          index={8}
          categories={[categories[2]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          setGuesses={setGuesses}
        />
      </div>
      <Export categories={categories} guesses={guesses} />
    </div>
  );
}
