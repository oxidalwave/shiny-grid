import Image from "next/image";
import { type Dispatch, type SetStateAction, useState } from "react";
import { PokemonBaseExpanded, type Pokemon } from "~/lib/data/dex";

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
          .flatMap((p) => [p, ...(p.regionals ?? [])])
          .filter((p) => p.Pokemon.toLowerCase().startsWith(name.toLowerCase()))
          .slice(0, 10);

  return (
    <div className="border-2">
      <button onClick={() => setOpened(false)}>Cancel</button>
      <div>{label}</div>
      <input
        autoFocus
        className="border-2"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <div className="flex flex-col max-h-60 overflow-y-auto">
        {filteredPokedex.map((p: Pokemon) => (
          <button key={p.Nat} onClick={() => handleSubmit(p)}>
            <div className="flex">
              <Image
                loading="lazy"
                alt={p.Pokemon}
                src={p.imageUrl ?? ""}
                width={28}
                height={21}
              />
              <div>{p.Pokemon}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
