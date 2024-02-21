/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useState, type ReactNode } from "react";
import { type Pokemon } from "~/lib/data/dex";

import { useSession } from "next-auth/react";
import { getCategoryFromId } from "~/lib/categories";
import { api } from "~/utils/api";
import Cell from "./Cell";

type Answer = {
  categoryIndex: number;
  pokemonId: string;
}

export type GridProps = {
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
  initialAnswers: Answer[];
}

const rows = [...Array(3).keys()]
  .map((i) => ({ index: i * 3, cat2: i + 3 }))
  .map((r) =>
    [...Array(3).keys()].map((i) => ({
      index: i + r.index,
      cat1: i,
      cat2: r.cat2,
    })),
  );

function parseInitialAnswers(initialAnswers: Answer[], dex: Pokemon[]) {
  const ia = [];
  for (const { categoryIndex, pokemonId } of initialAnswers) {
    const found = dex.find(({ id }) => id === pokemonId);
    if (found) {
      ia[categoryIndex] = found;
    }
  }
  return ia;
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

  const [guesses, setGuesses] = useState<(Pokemon | undefined)[]>(
    parseInitialAnswers(initialAnswers, dex),
  );

  const trpc = api.useUtils();

  const { mutate } = api.makeGuess.useMutation({
    onSettled: async (_data, _error, vars) => {
      await Promise.allSettled([
        trpc.guesses.invalidate({ seed, categoryIndex: vars.categoryIndex }),
        trpc.guess.invalidate({
          seed,
          categoryIndex: vars.categoryIndex,
          pokemonId: vars.pokemonId,
        }),
      ]);
    },
  });

  const handleGuess = useCallback(
    (pokemon: Pokemon, categoryIndex: number) => {
      const temp = [...guesses];
      const found = dex.find(({ id }) => id === pokemon.id);
      if (found) {
        temp[categoryIndex] = found;
      }
      setGuesses(temp);
      if (session.data && session.data?.user?.name === username) {
        mutate({
          seed,
          username: session.data?.user?.name ?? "",
          categoryIndex,
          pokemonId: pokemon.id,
        });
      }
    },
    [dex, guesses, mutate, seed, session.data, username],
  );

  const disabled = loading || session.data?.user?.name !== username;

  const DefinedCell = useCallback(
    (c: { index: number; cat1: number; cat2: number }) => (
      <Cell
        disabled={disabled}
        seed={seed}
        index={c.index}
        initialGuess={guesses[c.index]}
        categories={[categories[c.cat1]!, categories[c.cat2]!]}
        pokedex={dex}
        guesses={guesses}
        onGuess={handleGuess}
      />
    ),
    [disabled, seed, guesses, categories, dex, handleGuess],
  );

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
          {rows[0]?.map((c) => <DefinedCell key={c.index} {...c} />)}
          <div className="h-32">{categoryLabels[4]}</div>
          {rows[1]?.map((c) => <DefinedCell key={c.index} {...c} />)}
          <div className="h-32">{categoryLabels[5]}</div>
          {rows[2]?.map((c) => <DefinedCell key={c.index} {...c} />)}
        </div>
      </div>
    </div>
  );
}
