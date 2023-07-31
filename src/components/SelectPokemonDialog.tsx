import Image from "next/image";
import { type Dispatch, type SetStateAction, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

export interface SelectPokemonDialogProps {
  label: string;
  pokedex: Pokemon[];
  handleGuess: (p: Pokemon) => void;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export default function SelectPokemonDialog({
  label,
  pokedex,
  setOpened,
  handleGuess,
}: SelectPokemonDialogProps) {
  const [name, setName] = useState<string>("");

  function handleSubmit(pokemon: Pokemon) {
    handleGuess(pokemon);
  }

  const filteredPokedex: Pokemon[] =
    name === ""
      ? []
      : pokedex
          .filter((p) => p.Pokemon.toLowerCase().includes(name.toLowerCase()))
          .flatMap((p) => [p, ...(p.regionals ?? [])])
          .slice(0, 10);

  return (
    <div className="p-2 w-80 bg-slate-700 text-white">
      <button
        className="bg-slate-900 w-full p-2 rounded"
        onClick={() => setOpened(false)}
      >
        Cancel
      </button>
      <div className="w-full py-4 flex justify-center text-xl">{label}</div>
      <input
        autoFocus
        type="text"
        className="p-2 border w-full border-slate-300 rounded bg-slate-900"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <div className="flex flex-col gap-2 overflow-y-auto pt-2">
        {filteredPokedex.map((p: Pokemon) => (
          <button
            className="rounded bg-slate-900 flex p-2"
            key={p.Pokemon}
            onClick={() => handleSubmit(p)}
          >
            <Image
              loading="lazy"
              alt={p.Pokemon}
              src={p.imageUrl ?? ""}
              width={28}
              height={21}
            />
            <div>{p.Pokemon}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
