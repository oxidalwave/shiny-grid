import Cell from "~/components/Cell";
import { type Pokemon } from "~/lib/data/dex";

import CategoryLabel from "./CategoryLabel";
import type Category from "~/lib/categories";
import Spinner from "./common/Spinner";

export interface GridProps {
  loading?: boolean;
  disabled?: boolean;
  seed: string;
  guesses: (Pokemon | undefined)[];
  dex: Pokemon[];
  categories: Category[];
  onGuess: (pokemon: Pokemon, categoryIndex: number) => void;
}

export default function Grid({
  loading = true,
  disabled = false,
  seed,
  dex,
  categories,
  guesses,
  onGuess,
}: GridProps) {
  return (
    <div>
      {loading && (
        <div className="h-screen flex items-center justify-center  z-10">
          <div className="rounded bg-opacity-50 bg-slate-700 p-20">
          <Spinner /></div>
        </div>
      )}
      <div className="flex justify-center">
        <div className="grid grid-cols-4">
          <div className="h-32 w-32" />
          <CategoryLabel category={categories[0]!} />
          <CategoryLabel category={categories[1]!} />
          <CategoryLabel category={categories[2]!} />
          <div className="h-32 w-32">
            <CategoryLabel category={categories[3]!} />
          </div>
          <Cell
            disabled={disabled}
            seed={seed}
            index={0}
            initialGuess={guesses[0]}
            categories={[categories[0]!, categories[3]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={onGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={1}
            initialGuess={guesses[1]}
            categories={[categories[1]!, categories[3]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={onGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={2}
            initialGuess={guesses[2]}
            categories={[categories[2]!, categories[3]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={onGuess}
          />
          <div className="h-32 w-32">
            <CategoryLabel category={categories[4]!} />
          </div>
          <Cell
            disabled={disabled}
            seed={seed}
            index={3}
            initialGuess={guesses[3]}
            categories={[categories[0]!, categories[4]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={onGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={4}
            initialGuess={guesses[4]}
            categories={[categories[1]!, categories[4]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={onGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={5}
            initialGuess={guesses[5]}
            categories={[categories[2]!, categories[4]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={onGuess}
          />
          <div className="h-32 w-32">
            <CategoryLabel category={categories[5]!} />
          </div>
          <Cell
            disabled={disabled}
            seed={seed}
            index={6}
            initialGuess={guesses[6]}
            categories={[categories[0]!, categories[5]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={onGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={7}
            initialGuess={guesses[7]}
            categories={[categories[1]!, categories[5]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={onGuess}
          />
          <Cell
            disabled={disabled}
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
    </div>
  );
}
