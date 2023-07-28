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
    <div className="card w-80">
      <div className="card-body">
        <button onClick={() => setOpened(false)}>Cancel</button>
        <div>{label}</div>
        <input
          autoFocus
          type="text"
          className="input input-bordered"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <div className="flex flex-col gap-2 overflow-y-auto">
          {filteredPokedex.map((p: Pokemon) => (
            <button
              className="btn btn-wide"
              key={p.Nat}
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
    </div>
  );
}
