import { type ReactNode } from "react";
import { type Pokemon } from "~/lib/data/dex";

import Cell from "./Cell";
import { type CategoryId } from "~/lib/categories";

interface Answer {
  categoryIndex: number;
  pokemonId: string;
}

export interface GridProps {
  header: ReactNode;
  categoryLabels: ReactNode[];
  dex: Pokemon[];
  seed: string;
  categoryIds: CategoryId[];
  username?: string;
  initialAnswers: Answer[];
}

const rows = [...Array(3).keys()]
  .map((i) => ({ index: i * 3, cat2: i + 3 }))
  .map((r) =>
    [...Array(3).keys()].map((i) => ({
      index: i + r.index,
      cat1: i,
      cat2: r.cat2,
    })),
  );

function parseInitialAnswers(initialAnswers: Answer[], dex: Pokemon[]) {
  const ia = [];
  for (const { categoryIndex, pokemonId } of initialAnswers) {
    const found = dex.find(({ id }) => id === pokemonId);
    if (found) {
      ia[categoryIndex] = found;
    }
  }
  return ia;
}

export default function App({
  header,
  categoryLabels,
  dex,
  seed,
  categoryIds,
  initialAnswers,
}: GridProps) {
  const guesses = parseInitialAnswers(initialAnswers, dex);

  return (
    <div className="flex flex-col">
      {header}
      <div className="flex justify-center">
        <div className="grid grid-cols-4">
          <div className="h-32" />
          {categoryLabels[0]}
          {categoryLabels[1]}
          {categoryLabels[2]}
          <div className="h-32">{categoryLabels[3]}</div>
          {rows[0]?.map((c) => (
            <Cell
              key={c.index}
              seed={seed}
              index={c.index}
              initialGuess={guesses[c.index]}
              categoryIds={[categoryIds[c.cat1]!, categoryIds[c.cat2]!]}
              pokedex={dex}
              guesses={guesses}
            />
          ))}
          <div className="h-32">{categoryLabels[4]}</div>
          {rows[1]?.map((c) => (
            <Cell
              key={c.index}
              seed={seed}
              index={c.index}
              initialGuess={guesses[c.index]}
              categoryIds={[categoryIds[c.cat1]!, categoryIds[c.cat2]!]}
              pokedex={dex}
              guesses={guesses}
            />
          ))}
          <div className="h-32">{categoryLabels[5]}</div>
          {rows[2]?.map((c) => (
            <Cell
              key={c.index}
              seed={seed}
              index={c.index}
              initialGuess={guesses[c.index]}
              categoryIds={[categoryIds[c.cat1]!, categoryIds[c.cat2]!]}
              pokedex={dex}
              guesses={guesses}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
