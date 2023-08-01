"use client";

import { useEffect, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

import { getCategories } from "~/lib/getCategories";
import type Category from "~/lib/categories";
import Grid from "./Grid";
import { signIn, useSession } from "next-auth/react";
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
    if (session && session.data?.user.name === username) {
      const temp = [...guesses];
      temp[categoryIndex] = pokemon.id;
      setGuesses(temp);

      fetch(`/api/${seed}/${session.data?.user.name}/${categoryIndex}`, {
        body: JSON.stringify({ id: pokemon.id }),
        method: "POST",
      }).catch((e) => {
        console.log(e);
      });
    } else if (!session) {
      const temp = [...guesses];
      temp[categoryIndex] = pokemon.id;
      setGuesses(temp);
    }
  }

  return (
    <div className="justify-center">
      <div className="p-2 w-screen">
        {session.data ? (
          <Link
            href={`/${seed}/${session.data.user.name}`}
            className="w-full rounded p-2 m-2 bg-slate-700 hover:scale-110 z-10 hover:z-20 transition ease-in-out"
          >
            Share your grid
          </Link>
        ) : (
          <button
            className="w-full rounded p-2 bg-slate-700 hover:scale-110 z-10 hover:z-20 transition ease-in-out"
            onClick={() => void signIn("DISCORD")}
          >
            Log In to share your grid
          </button>
        )}
      </div>
      <Grid
        categories={categories}
        dex={dex}
        guesses={guesses}
        onGuess={handleGuess}
      />
    </div>
  );
}
