/* eslint-disable @next/next/no-img-element */
"use client";

import { type ReactNode, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

import Grid from "./Grid";
import { useSession } from "next-auth/react";
import { getCategoryFromId } from "~/lib/categories";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import Cell from "./Cell";

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
    const temp = [...guesses];
    const found = dex.find(({ id }) => id === pokemon.id);
    if (found) {
      temp[categoryIndex] = found;
    }
    setGuesses(temp);
    if (session.data && session.data.user.name === username) {
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
    }
  }

  const disabled = loading || session.data?.user.name !== username;

  return (
    <div className="flex flex-col">
      {header}
      <div className="flex justify-center">
        <div className="grid grid-cols-4">
          <div className="h-32" />
          {categoryLabels[0]}
          {categoryLabels[1]}
          {categoryLabels[2]}
          <div className="h-32">{categoryLabels[3]}</div>
          <Cell
            disabled={disabled}
            seed={seed}
            index={0}
            initialGuess={guesses[0]}
            categories={[categories[0]!, categories[3]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={1}
            initialGuess={guesses[1]}
            categories={[categories[1]!, categories[3]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={2}
            initialGuess={guesses[2]}
            categories={[categories[2]!, categories[3]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
          <div className="h-32">{categoryLabels[4]}</div>
          <Cell
            disabled={disabled}
            seed={seed}
            index={3}
            initialGuess={guesses[3]}
            categories={[categories[0]!, categories[4]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={4}
            initialGuess={guesses[4]}
            categories={[categories[1]!, categories[4]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={5}
            initialGuess={guesses[5]}
            categories={[categories[2]!, categories[4]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
          <div className="h-32">{categoryLabels[5]}</div>
          <Cell
            disabled={disabled}
            seed={seed}
            index={6}
            initialGuess={guesses[6]}
            categories={[categories[0]!, categories[5]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={7}
            initialGuess={guesses[7]}
            categories={[categories[1]!, categories[5]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
          <Cell
            disabled={disabled}
            seed={seed}
            index={8}
            initialGuess={guesses[8]}
            categories={[categories[2]!, categories[5]!]}
            pokedex={dex}
            guesses={guesses}
            onGuess={handleGuess}
          />
        </div>
      </div>
    </div>
  );
}
