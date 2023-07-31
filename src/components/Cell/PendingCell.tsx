"use client";

import { useRef } from "react";
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
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleOpen() {
    modalRef.current?.showModal();
  }

  function handleClose() {
    modalRef.current?.close();
  }

  return (
    <>
      <dialog
        className="z-50 bg-slate-700 text-white p-2 w-80 rounded"
        ref={modalRef}
      >
        <button className="w-full justify-center rounded bg-slate-900 flex p-2" onClick={handleClose}>
          Close
        </button>
        <SelectPokemonDialog
          label={categories.map((c) => c.label).join(" and ")}
          pokedex={pokedex}
          handleGuess={onGuess}
        />
      </dialog>
      <button
        className="h-full bg-slate-500 hover:bg-slate-700 hover:scale-110 z-10 hover:z-20 transition ease-in-out"
        onClick={handleOpen}
      />
    </>
  );
}
