import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const exportGuesses = guesses.map((g) => {
    const cats = g.categories.map((c) => c.label).join(" and ");
    const correct = g.categories.every((c) => c.test(g.pokemon));
    return correct ?  `${cats} ✅: ${g.pokemon.Pokemon}` : `${cats} ❌: ${g.pokemon.Pokemon}`;
  });

  function handleOpen() {
    setOpen(true);
    void navigator.clipboard.writeText(
      `Seed: ${seed}\n` + exportGuesses.join("\n")
    );
  }

  return (
    <>
      <button onClick={handleOpen}>Export</button>
      <dialog className="bg-transparent text-white" open={open}>
        <button onClick={() => setOpen(false)}>Close</button>
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
