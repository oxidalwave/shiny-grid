"use client";

import { useState } from "react";
import { type Pokemon } from "~/lib/data/dex";
import Export from "./Export";

import { getCategories } from "~/lib/getCategories";
import type Category from "~/lib/categories";
import Grid from "./Grid";
import { useSession } from "next-auth/react";

interface Guess {
  pokemon: Pokemon;
  categories: Category[];
}

export interface GridProps {
  dex: Pokemon[];
  seed: string;
}

export default function App({ dex, seed }: GridProps) {
  const categories = getCategories(seed);
  const session = useSession();

  const [guesses, setGuesses] = useState<Guess[]>([]);

  function handleGuess(
    pokemon: Pokemon,
    categories: Category[],
    categoryIndex: number
  ) {
    if (session) {
      fetch(`/api/${seed}/${session.data?.user.name}/${categoryIndex}`, {
        body: JSON.stringify({ id: pokemon.id }),
        method: "POST",
      })
        .then(() => setGuesses([...guesses, { pokemon, categories }]))
        .catch((e) => {
          console.log(e);
          setGuesses([...guesses, { pokemon, categories }]);
        });
    } else {
      setGuesses([...guesses, { pokemon, categories }]);
    }
  }

  return (
    <div className="">
      <Grid
        categories={categories}
        dex={dex}
        guesses={guesses}
        onGuess={handleGuess}
      />
      <Export seed={seed} guesses={guesses} />
    </div>
  );
}
