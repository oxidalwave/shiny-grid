import Image from "next/image";
import { type Dispatch, type SetStateAction, useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import SelectPokemonDialog from "./SelectPokemonDialog";

export interface CellProps {
  index: number;
  pokedex: Pokemon[];
  guesses: (Pokemon | undefined)[];
  setGuesses: Dispatch<SetStateAction<(Pokemon | undefined)[]>>;
  categories: Category[];
}

export default function Cell({
  index,
  pokedex,
  guesses,
  setGuesses,
  categories,
}: CellProps) {
  const [guess, setGuess] = useState<Pokemon | undefined>(undefined);
  const [opened, setOpened] = useState(false);

  function handleGuess(p: Pokemon) {
    setGuess(p);
    const guessesClone = [...guesses];
    guessesClone[index] = p;
    setGuesses(guessesClone);
  }

  if (!guess) {
    return (
      <>
        <dialog open={opened} onClose={() => setOpened(false)}>
          <SelectPokemonDialog
            setOpened={setOpened}
            label={categories.map((c) => c.label).join(" and ")}
            pokedex={pokedex}
            handleGuess={handleGuess}
          />
        </dialog>
        <button
          className="hover:bg-slate-300"
          onClick={() => setOpened(true)}
        />
      </>
    );
  }

  if (categories[0]?.test(guess) && categories[1]?.test(guess)) {
    return (
      <div className="w-full flex justify-center items-center">
        <Image
          alt={guess.Pokemon}
          src={`/sprites/${guess.Pokemon.toLowerCase()}.png`}
          width={56}
          height={42}
        />
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center items-center bg-red-700">
      <Image
        alt={guess.Pokemon}
        src={`/sprites/${guess.Pokemon.toLowerCase()}.png`}
        width={56}
        height={42}
      />
    </div>
  );
}
