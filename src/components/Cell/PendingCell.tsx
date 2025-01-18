"use client";

import Image from "next/image";
import { Suspense, useRef, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";
import { type CategoryId, categories } from "~/lib/categories";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { type Seed } from "~/lib/getCategories";
import LoadedCell from "./LoadedCell";
import CellImage from "./CellImage";
import { tests } from "~/lib/categories";
import { useGuessContext } from "~/lib/contexts/GuessContext";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export interface CellProps {
  pokedex: Pokemon[];
  categoryIds: CategoryId[];
  seed: Seed;
  categoryIndex: number;
}

export default function PendingCell({
  pokedex,
  categoryIds,
  seed,
  categoryIndex,
}: CellProps) {
  const [guesses, setGuesses] = useGuessContext();

  const session = useSession();

  const modalRef = useRef<HTMLDialogElement>(null);

  const [name, setName] = useState<string>("");
  const [guess, setGuess] = useState<Pokemon | null>(null);

  const trpc = api.useUtils();
  const { mutate } = api.makeGuess.useMutation({
    onSettled: (_d, _e, { pokemonId }) => {
      void trpc.guess.invalidate({
        seed,
        categoryIndex,
        pokemonId,
      });
    },
  });

  if (guess) {
    const isSuccess = categoryIds.every((c) => tests[c]?.(guess));

    const child = (
      <div className="h-full flex flex-col justify-center items-center">
        <Suspense fallback={<CellImage pokemon={guess} />}>
          <LoadedCell seed={seed} index={categoryIndex} guess={guess} />
        </Suspense>
      </div>
    );

    return (
      <div className="w-full">
        {isSuccess && <div className="bg-green-500 h-full">{child}</div>}
        {!isSuccess && <div className="bg-red-500 h-full">{child}</div>}
      </div>
    );
  }

  function handleSubmit(pokemon: Pokemon) {
    mutate({
      seed,
      username: session.data?.user.name ?? "",
      categoryIndex,
      pokemonId: pokemon.id,
    });
    setGuess(pokemon);
    const g = [...guesses];
    g[categoryIndex] = pokemon;
    setGuesses(g);
  }

  const filteredPokedex =
    name === ""
      ? []
      : pokedex
          .filter((p) => p.name.toLowerCase().includes(name.toLowerCase()))
          .slice(0, 10);

  const cats = categoryIds.map((c) => categories[c]);

  function handleOpen() {
    modalRef.current?.showModal();
  }

  function handleClose() {
    modalRef.current?.close();
  }

  return (
    <>
      <dialog
        className="z-50 w-80 rounded bg-slate-700 p-2 text-white"
        ref={modalRef}
      >
        <Button
          className="flex w-full justify-center rounded bg-slate-800 p-2 hover:bg-slate-900"
          onClick={handleClose}
        >
          Close
        </Button>
        <div>
          <div className="flex w-full justify-center py-4 text-xl">
            {cats
              .map((c) => c?.label)
              .filter((l) => l !== undefined)
              .reduce((p, c) => [p, " and ", c])}
          </div>
          <Input
            autoFocus
            type="text"
            className="w-full rounded border border-slate-300 bg-slate-900 p-2"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <div className="flex flex-col gap-2 overflow-y-auto pt-2">
            {filteredPokedex.map((p) => (
              <Button
                className="flex rounded bg-slate-900 p-2"
                key={p.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(p);
                }}
              >
                <Image
                  loading="lazy"
                  alt={p.name}
                  src={p.imageUrl ?? ""}
                  width={24}
                  height={24}
                />
                <div className="pl-2">{p.name}</div>
              </Button>
            ))}
          </div>
        </div>
      </dialog>
      <Button
        className="h-full bg-slate-700 hover:bg-slate-800 rounded-none"
        onClick={handleOpen}
      />
    </>
  );
}
