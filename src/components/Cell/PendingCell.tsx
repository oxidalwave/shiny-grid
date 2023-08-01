"use client";

import { useRef, useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import Image from "next/image";

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

  const [name, setName] = useState<string>("");

  function handleSubmit(pokemon: Pokemon) {
    onGuess(pokemon);
  }

  const filteredPokedex =
    name === ""
      ? []
      : pokedex
          .filter((p) => p.name.toLowerCase().includes(name.toLowerCase()))
          .slice(0, 10);

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
        <button
          className="w-full justify-center rounded bg-slate-900 flex p-2"
          onClick={handleClose}
        >
          Close
        </button>
        <div>
          <div className="w-full py-4 flex justify-center text-xl">
            {categories.map((c) => c.label).join(" and ")}
          </div>
          <input
            autoFocus
            type="text"
            className="p-2 border w-full border-slate-300 rounded bg-slate-900"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <div className="flex flex-col gap-2 overflow-y-auto pt-2">
            {filteredPokedex.map((p) => (
              <button
                className="rounded bg-slate-900 flex p-2"
                key={p.name}
                onClick={() => handleSubmit(p)}
              >
                <Image
                  loading="lazy"
                  alt={p.name}
                  src={p.imageUrl ?? ""}
                  width={28}
                  height={21}
                />
                <div>{p.name}</div>
              </button>
            ))}
          </div>
        </div>
      </dialog>
      <button
        className="h-full bg-slate-500 hover:bg-slate-700 hover:scale-110 z-10 hover:z-20 transition ease-in-out"
        onClick={handleOpen}
      />
    </>
  );
}
