import Cell from "~/components/Cell";
import { type Pokemon } from "~/lib/data/dex";

import CategoryLabel from "./CategoryLabel";
import type Category from "~/lib/categories";

interface Guess {
  pokemon: Pokemon;
  categories: Category[];
}

export interface GridProps {
  guesses: Guess[];
  dex: Pokemon[];
  categories: Category[];
  onGuess: (pokemon: Pokemon, categories: Category[]) => void;
}

export default function Grid({ dex, categories, guesses, onGuess }: GridProps) {  
  return (
    <div className="grid grid-cols-4 divide-y divide-x divide-slate-500 border-b border-b-slate-500 border-r border-r-slate-500">
      <div className="h-12" />
      <CategoryLabel category={categories[0]!} />
      <CategoryLabel category={categories[1]!} />
      <CategoryLabel category={categories[2]!} />
      <div className="h-20">
        <CategoryLabel category={categories[3]!} />
      </div>
      <Cell
        categories={[categories[0]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        categories={[categories[1]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        categories={[categories[2]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <div className="h-20">
        <CategoryLabel category={categories[4]!} />
      </div>
      <Cell
        categories={[categories[0]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        categories={[categories[1]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        categories={[categories[2]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <div className="h-20">
        <CategoryLabel category={categories[5]!} />
      </div>
      <Cell
        categories={[categories[0]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        categories={[categories[1]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
      <Cell
        categories={[categories[2]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={onGuess}
      />
    </div>
  );
}
