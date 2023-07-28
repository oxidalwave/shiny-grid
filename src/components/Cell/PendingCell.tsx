"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import SelectPokemonDialog from "../SelectPokemonDialog";

export interface CellProps {
  index: number;
  pokedex: Pokemon[];
  guesses: (Pokemon | undefined)[];
  setGuess: Dispatch<SetStateAction<Pokemon | undefined>>;
  setGuesses: Dispatch<SetStateAction<(Pokemon | undefined)[]>>;
  categories: Category[];
}

export default function PendingCell({
  index,
  pokedex,
  guesses,
  setGuess,
  setGuesses,
  categories,
}: CellProps) {
  const [opened, setOpened] = useState(false);

  function handleGuess(p: Pokemon) {
    setGuess(p);
    const guessesClone = [...guesses];
    guessesClone[index] = p;
    setGuesses(guessesClone);
  }

  return (
    <>
      <dialog open={opened} onClose={() => setOpened(false)}>
        {opened && (
          <SelectPokemonDialog
            setOpened={setOpened}
            label={categories.map((c) => c.label).join(" and ")}
            pokedex={pokedex}
            handleGuess={handleGuess}
          />
        )}
      </dialog>
      <button className="hover:bg-slate-300" onClick={() => setOpened(true)} />
    </>
  );
}
