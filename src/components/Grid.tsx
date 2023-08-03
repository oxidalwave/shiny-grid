import Cell from "~/components/Cell";
import { type Pokemon } from "~/lib/data/dex";

import CategoryLabel from "./CategoryLabel";
import type Category from "~/lib/categories";

export interface GridProps {
  seed: string;
  guesses: Pokemon[];
  dex: Pokemon[];
  categories: Category[];
  onGuess: (
    pokemon: Pokemon,
    categories: Category[],
    categoryIndex: number
  ) => void;
}

export default function Grid({
  seed,
  dex,
  categories,
  guesses,
  onGuess,
}: GridProps) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4">
        <div className="h-32" />
        <CategoryLabel category={categories[0]!} />
        <CategoryLabel category={categories[1]!} />
        <CategoryLabel category={categories[2]!} />
        <div className="h-32">
          <CategoryLabel category={categories[3]!} />
        </div>
        <Cell
          seed={seed}
          index={0}
          initialGuess={guesses[0]}
          categories={[categories[0]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
        <Cell
          seed={seed}
          index={1}
          initialGuess={guesses[1]}
          categories={[categories[1]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
        <Cell
          seed={seed}
          index={2}
          initialGuess={guesses[2]}
          categories={[categories[2]!, categories[3]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
        <div className="h-32">
          <CategoryLabel category={categories[4]!} />
        </div>
        <Cell
          seed={seed}
          index={3}
          initialGuess={guesses[3]}
          categories={[categories[0]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
        <Cell
          seed={seed}
          index={4}
          initialGuess={guesses[4]}
          categories={[categories[1]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
        <Cell
          seed={seed}
          index={5}
          initialGuess={guesses[5]}
          categories={[categories[2]!, categories[4]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
        <div className="h-32">
          <CategoryLabel category={categories[5]!} />
        </div>
        <Cell
          seed={seed}
          index={6}
          initialGuess={guesses[6]}
          categories={[categories[0]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
        <Cell
          seed={seed}
          index={7}
          initialGuess={guesses[7]}
          categories={[categories[1]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
        <Cell
          seed={seed}
          index={8}
          initialGuess={guesses[8]}
          categories={[categories[2]!, categories[5]!]}
          pokedex={dex}
          guesses={guesses}
          onGuess={onGuess}
        />
      </div>
    </div>
  );
}
