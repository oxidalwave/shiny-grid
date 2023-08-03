/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

import Grid from "./Grid";
import { signIn, signOut, useSession } from "next-auth/react";
import { getCategoryFromId } from "~/lib/categories";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { env } from "~/env.mjs";

export interface GridProps {
  loading?: boolean;
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
  loading = false,
  dex,
  seed,
  categoryIds,
  username,
  initialAnswers,
}: GridProps) {
  const categories = categoryIds.map(getCategoryFromId);

  const session = useSession();

  function parseInitialAnswers() {
    const ia = [];
    for (const { categoryIndex, pokemonId } of initialAnswers) {
      const found = dex.find(({ id }) => id === pokemonId);
      if (found) {
        ia[categoryIndex] = found;
      }
    }
    return ia;
  }
  const [guesses, setGuesses] = useState<(Pokemon | undefined)[]>(
    parseInitialAnswers(),
  );

  const queryClient = useQueryClient();

  function handleGuess(pokemon: Pokemon, categoryIndex: number) {
    if (session.data && session.data.user.name === username) {
      const temp = [...guesses];
      const found = dex.find(({ id }) => id === pokemon.id);
      if (found) {
        temp[categoryIndex] = found;
      }
      setGuesses(temp);
      fetch(
        `/api/grids/${seed}/users/${session.data?.user.name}/categories/${categoryIndex}`,
        {
          body: JSON.stringify({ id: pokemon.id }),
          method: "POST",
        },
      )
        .then(() =>
          queryClient.invalidateQueries([
            "guesses",
            seed,
            categoryIndex,
            pokemon.id,
          ]),
        )
        .catch((e) => {
          console.log(e);
        });
    } else if (!session) {
      const temp = [...guesses];
      const found = dex.find(({ id }) => id === pokemon.id);
      if (found) {
        temp[categoryIndex] = found;
      }
      setGuesses(temp);
    }
  }

  function handleShare() {
    const url = `${env.NEXT_PUBLIC_API_URL}/${seed}/${session.data?.user.name}`;
    void navigator.clipboard
      .writeText(url)
      .then(() => toast("A sharable link has been copied to your clipboard!"));
  }

  return (
    <div className="flex flex-col">
      <div className="p-2">
        {session.data ? (
          <div className="flex">
            <a
              className="rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
              href="https://github.com/oxidalwave/shiny-grid"
            >
              <img
                height={48}
                width={48}
                alt="github"
                src="/icons/github.png"
              />
            </a>
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
          <div className="flex">
            <a
              className="rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
              href="https://github.com/oxidalwave/shiny-grid"
            >
              <img
                height={28}
                width={28}
                alt="github"
                src="/icons/github.png"
              />
            </a>
            <button
              className="w-full rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
              onClick={() => void signIn()}
            >
              Log In to share your grid
            </button>
          </div>
        )}
      </div>
      <Grid
        disabled={loading || session.data?.user.name !== username}
        seed={seed}
        categories={categories}
        dex={dex}
        guesses={guesses}
        onGuess={handleGuess}
      />
    </div>
  );
}
