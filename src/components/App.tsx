"use client";

import { useEffect, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

import type Category from "~/lib/categories";
import Grid from "./Grid";
import { signIn, signOut, useSession } from "next-auth/react";
import { getCategoryFromId } from "~/lib/categories";
import { toast } from "react-hot-toast";

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

  const [guesses, setGuesses] = useState<Pokemon[]>([]);

  useEffect(() => {
    const temp = [...guesses];
    for (const { categoryIndex, pokemonId } of initialAnswers) {
      temp[categoryIndex] = dex.find(({ id }) => id === pokemonId)!;
    }
    setGuesses(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleGuess(
    pokemon: Pokemon,
    categories: Category[],
    categoryIndex: number
  ) {
    if (session.data && session.data.user.name === username) {
      const temp = [...guesses];
      temp[categoryIndex] = dex.find(({ id }) => id === pokemon.id)!;
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
      temp[categoryIndex] = dex.find(({ id }) => id === pokemon.id)!;
      setGuesses(temp);
    }
  }

  function handleShare() {
    const mainhost = window.location.host;
    const url = `https://${mainhost}/${seed}/${session.data?.user.name}`;
    void navigator.clipboard
      .writeText(url)
      .then(() => toast("A sharable link has been copied to your clipboard!"));
  }

  return (
    <div className="">
      <div className="p-2">
        {session.data ? (
          <div className="flex">
            <button
              onClick={handleShare}
              className="w-full rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
            >
              Share your grid
            </button>
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
