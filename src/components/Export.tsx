import { useRef } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import { getCategories } from "~/lib/getCategories";

export interface ExportProps {
  seed: string;
  dex: Pokemon[];
  guesses: string[];
}

function test(p: Pokemon, allCategories: Category[], i: number) {
  return (
    i === 0
      ? [allCategories[0], allCategories[3]]
      : i === 1
      ? [allCategories[0], allCategories[4]]
      : i === 2
      ? [allCategories[0], allCategories[5]]
      : i === 3
      ? [allCategories[2], allCategories[3]]
      : i === 4
      ? [allCategories[2], allCategories[4]]
      : i === 5
      ? [allCategories[1], allCategories[5]]
      : i === 6
      ? [allCategories[2], allCategories[3]]
      : i === 7
      ? [allCategories[2], allCategories[4]]
      : i === 8
      ? [allCategories[2], allCategories[5]]
      : []
  ).every((c) => c?.test(p));
}

export default function Export({ seed, dex, guesses }: ExportProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const categories = getCategories(seed);

  const exportGuesses = guesses.map((g, i) => {
    const cats = categories.map((c) => c.label).join(" and ");
    const pokemon = dex.find((p) => p.id === g);
    if (pokemon) {
      const correct = test(pokemon, categories, i);
      return correct
        ? `${cats} ✅: ${pokemon.name}`
        : `${cats} ❌: ${pokemon.name}`;
    }
    {
      return undefined;
    }
  });

  function handleOpen() {
    modalRef.current?.showModal();
    void navigator.clipboard.writeText(
      `Seed: ${seed}\n` + exportGuesses.filter((g) => !!g).join("\n")
    );
  }

  return (
    <>
      <button onClick={handleOpen}>Export</button>
      <dialog
        className="p-2 rounded w-80 bg-slate-700 text-white"
        ref={modalRef}
      >
        <button
          className="bg-slate-900 w-full p-2 rounded"
          onClick={() => modalRef.current?.close()}
        >
          Close
        </button>
        <div>The below has been copied to the clipboard.</div>
        <div>Seed: {seed}</div>
        <div className="flex flex-col">
          {exportGuesses.map((g, i) => (
            <div key={i}>{g}</div>
          ))}
        </div>
      </dialog>
    </>
  );
}
