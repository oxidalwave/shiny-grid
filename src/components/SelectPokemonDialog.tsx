import Image from "next/image";
import { useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

export interface SelectPokemonDialogProps {
  label: string;
  pokedex: Pokemon[];
  handleGuess: (p: Pokemon) => void;
}

export default function SelectPokemonDialog({
  label,
  pokedex,
  handleGuess,
}: SelectPokemonDialogProps) {
  const [name, setName] = useState<string>("");

  function handleSubmit(pokemon: Pokemon) {
    handleGuess(pokemon);
  }

  const filteredPokedex =
    name === ""
      ? []
      : pokedex
          .filter((p) => p.name.toLowerCase().includes(name.toLowerCase()))
          .slice(0, 10);

  return (
    <div>
      <div className="w-full py-4 flex justify-center text-xl">{label}</div>
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
  );
}
