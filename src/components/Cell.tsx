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

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  function handleGuess(p: Pokemon) {
    setGuess(p);
    const guessesClone = [...guesses];
    guessesClone[index] = p;
    setGuesses(guessesClone);
  }

  if (!guess) {
    return (
      <>
        <dialog open={opened} onClose={close}>
          <SelectPokemonDialog
            cancel={close}
            label={categories.map((c) => c.label).join(" and ")}
            pokedex={pokedex}
            handleGuess={handleGuess}
          />
        </dialog>
        <button className="hover:bg-slate-300" onClick={open} />
      </>
    );
  }

  if (categories[0]?.test(guess) && categories[1]?.test(guess)) {
    return (
      <div className="w-full content-center">
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
    <div className="w-full content-center bg-red-700">
      <Image
        alt={guess.Pokemon}
        src={`/sprites/${guess.Pokemon.toLowerCase()}.png`}
        width={56}
        height={42}
      />
    </div>
  );
}
