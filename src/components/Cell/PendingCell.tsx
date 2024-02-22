"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";
import { CategoryId, categories } from "~/lib/revisedCategories";

export interface CellProps {
  disabled?: boolean;
  pokedex: Pokemon[];
  onGuess: (p: Pokemon) => void;
  categoryIds: CategoryId[];
}

export default function PendingCell({
  disabled = false,
  pokedex,
  onGuess,
  categoryIds,
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

  const cats = categoryIds.map((c) => categories[c]);

  function handleOpen() {
    modalRef.current?.showModal();
  }

  function handleClose() {
    modalRef.current?.close();
  }

  return disabled ? (
    <div className="h-full bg-slate-700" />
  ) : (
    <>
      <dialog
        className="z-50 w-80 rounded bg-slate-700 p-2 text-white"
        ref={modalRef}
      >
        <button
          className="flex w-full justify-center rounded bg-slate-800 p-2 hover:bg-slate-900"
          onClick={handleClose}
        >
          Close
        </button>
        <div>
          <div className="flex w-full justify-center py-4 text-xl">
            {cats.map((c) => c?.label).join(" and ")}
          </div>
          <input
            autoFocus
            type="text"
            className="w-full rounded border border-slate-300 bg-slate-900 p-2"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <div className="flex flex-col gap-2 overflow-y-auto pt-2">
            {filteredPokedex.map((p) => (
              <button
                className="flex rounded bg-slate-900 p-2"
                key={p.name}
                onClick={() => handleSubmit(p)}
              >
                <Image
                  unoptimized
                  loading="lazy"
                  alt={p.name}
                  src={p.imageUrl ?? ""}
                  width={24}
                  height={24}
                />
                <div className="pl-2">{p.name}</div>
              </button>
            ))}
          </div>
        </div>
      </dialog>
      <button
        className="h-full bg-slate-700 hover:bg-slate-800"
        onClick={handleOpen}
      />
    </>
  );
}
