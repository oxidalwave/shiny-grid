/* eslint-disable @next/next/no-img-element */
"use client";

import { type ReactNode, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

import Grid from "./Grid";
import { useSession } from "next-auth/react";
import { getCategoryFromId } from "~/lib/categories";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export interface GridProps {
  header: ReactNode;
  categoryLabels: ReactNode[];
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
  header,
  categoryLabels,
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
          toast(`Something went wrong:\n${JSON.stringify(e)}`);
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

  return (
    <div className="flex flex-col">
      {header}
      <Grid
        categoryLabels={categoryLabels}
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
