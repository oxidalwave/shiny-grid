"use client";

import { useState } from "react";
import Cell from "~/components/Cell";
import { Generations } from "~/lib/categories/generations";
import { Stats } from "~/lib/categories/stats";
import { Types } from "~/lib/categories/types";
import { type Pokemon } from "~/lib/data/dex";
import Export from "./Export";

import gen from "random-seed";
import Category from "./Category";

export interface GridProps {
  dex: Pokemon[];
  seed: number;
}

export default function Grid({ dex, seed }: GridProps) {
  const rand = gen.create(seed.toString());

  const type1 = Types[rand(Types.length)]!;
  const type2 = Types[rand(Types.length)]!;
  const type3 = Types[rand(Types.length)]!;
  const type4 = Types[rand(Types.length)]!;
  const generation = Generations[rand(Generations.length)]!;
  const stats = Stats[rand(Stats.length)]!;

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
        <div className="h-20">
          <Category category={categories[4]!} />{" "}
        </div>
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
        <div className="h-20">
          <Category category={categories[5]!} />
        </div>
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
      <Export seed={seed} categories={categories} guesses={guesses} />
    </div>
  );
}
