"use client";

import { useEffect, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";
import Export from "./Export";

import { getCategories } from "~/lib/getCategories";
import type Category from "~/lib/categories";
import Grid from "./Grid";
import { useSession } from "next-auth/react";
import Link from "next/link";

export interface GridProps {
  dex: Pokemon[];
  seed: string;
  username?: string;
  initialAnswers: {
    categoryIndex: number;
    pokemonId: string;
  }[];
}

export default function App({
  dex,
  seed,
  username,
  initialAnswers,
}: GridProps) {
  const categories = getCategories(seed);
  const session = useSession();

  const [guesses, setGuesses] = useState<string[]>([]);

  useEffect(() => {
    const temp = [...guesses];
    for (const { categoryIndex, pokemonId } of initialAnswers) {
      temp[categoryIndex] = pokemonId;
    }
    setGuesses(temp);
  }, []);

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
        .then(() => {
          const temp = [...guesses];
          temp[categoryIndex] = pokemon.id;
          setGuesses(temp);
        })
        .catch((e) => {
          console.log(e);
          const temp = [...guesses];
          temp[categoryIndex] = pokemon.id;
          setGuesses(temp);
        });
    } else {
      const temp = [...guesses];
      temp[categoryIndex] = pokemon.id;
      setGuesses(temp);
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
      {username ? (
        <Link href={`/${seed}/${username}`}>Export</Link>
      ) : (
        <div>Log In to share your grid</div>
      )}
    </div>
  );
}
