import { useRef } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";

export interface ExportProps {
  seed: number;
  guesses: {
    pokemon: Pokemon;
    categories: Category[];
  }[];
}

export default function Export({ seed, guesses }: ExportProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const exportGuesses = guesses.map((g) => {
    const cats = g.categories.map((c) => c.label).join(" and ");
    const correct = g.categories.every((c) => c.test(g.pokemon));
    return correct
      ? `${cats} ✅: ${g.pokemon.name}`
      : `${cats} ❌: ${g.pokemon.name}`;
  });

  function handleOpen() {
    modalRef.current?.showModal();
    void navigator.clipboard.writeText(
      `Seed: ${seed}\n` + exportGuesses.join("\n")
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
