"use client";

import { useEffect, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

import type Category from "~/lib/categories";
import Grid from "./Grid";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { getCategoryFromId } from "~/lib/categories";

export interface GridProps {
  dex: Pokemon[];
  seed: string;
  categoryIds: {
    kind: "TYPE" | "GEN" | "STAT" | "EGGGROUP";
    id: string;
  }[];
  username?: string;
  initialAnswers: {
    categoryIndex: number;
    pokemonId: string;
  }[];
}

export default function App({
  dex,
  seed,
  categoryIds,
  username,
  initialAnswers,
}: GridProps) {
  const categories = categoryIds.map(getCategoryFromId);

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

      fetch(
        `/api/seeds/${seed}/users/${session.data?.user.name}/categories/${categoryIndex}`,
        {
          body: JSON.stringify({ id: pokemon.id }),
          method: "POST",
        }
      ).catch((e) => {
        console.log(e);
      });
    } else if (!session) {
      const temp = [...guesses];
      temp[categoryIndex] = pokemon.id;
      setGuesses(temp);
    }
  }

  return (
    <div className="">
      <div className="p-2">
        {session.data ? (
          <div className="flex">
            <Link
              href={`/${seed}/${session.data.user.name}`}
              className="w-full rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
            >
              Share your grid
            </Link>
            <button
              className="w-full rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
              onClick={() => void signOut()}
            >
              Log out
            </button>
          </div>
        ) : (
          <button
            className="w-full rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
            onClick={() => void signIn()}
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
