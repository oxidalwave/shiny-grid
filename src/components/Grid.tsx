import Cell from "~/components/Cell";
import { type Pokemon } from "~/lib/data/dex";

import CategoryLabel from "./CategoryLabel";
import type Category from "~/lib/categories";

export interface GridProps {
  guesses: string[];
  dex: Pokemon[];
  categories: Category[];
  onGuess: (
    pokemon: Pokemon,
    categories: Category[],
    categoryIndex: number
  ) => void;
}

export default function Grid({ dex, categories, guesses, onGuess }: GridProps) {
  return (
    <div className="grid grid-cols-4 divide-y divide-x divide-slate-700 border-b border-b-slate-700 border-r border-r-slate-700">
      <div className="h-24" />
      <CategoryLabel category={categories[0]!} />
      <CategoryLabel category={categories[1]!} />
      <CategoryLabel category={categories[2]!} />
      <div className="h-24">
        <CategoryLabel category={categories[3]!} />
      </div>
      <Cell
        index={0}
        initialGuess={guesses[0]}
        categories={[categories[0]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        index={1}
        initialGuess={guesses[1]}
        categories={[categories[1]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        index={2}
        initialGuess={guesses[2]}
        categories={[categories[2]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <div className="h-24">
        <CategoryLabel category={categories[4]!} />
      </div>
      <Cell
        index={3}
        initialGuess={guesses[3]}
        categories={[categories[0]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        index={4}
        initialGuess={guesses[4]}
        categories={[categories[1]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        index={5}
        initialGuess={guesses[5]}
        categories={[categories[2]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <div className="h-24">
        <CategoryLabel category={categories[5]!} />
      </div>
      <Cell
        index={6}
        initialGuess={guesses[6]}
        categories={[categories[0]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        index={7}
        initialGuess={guesses[7]}
        categories={[categories[1]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        index={8}
        initialGuess={guesses[8]}
        categories={[categories[2]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
    </div>
  );
}
