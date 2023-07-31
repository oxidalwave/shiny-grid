"use client";

import { useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import SelectPokemonDialog from "../SelectPokemonDialog";

export interface CellProps {
  pokedex: Pokemon[];
  onGuess: (p: Pokemon) => void;
  categories: Category[];
}

export default function PendingCell({
  pokedex,
  onGuess,
  categories,
}: CellProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <dialog open={opened} onClose={() => setOpened(false)}>
        {opened && (
          <SelectPokemonDialog
            setOpened={setOpened}
            label={categories.map((c) => c.label).join(" and ")}
            pokedex={pokedex}
            handleGuess={onGuess}
          />
        )}
      </dialog>
      <button
        className="h-full bg-slate-500 hover:bg-slate-700"
        onClick={() => setOpened(true)}
      />
    </>
  );
}
