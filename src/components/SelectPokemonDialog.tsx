import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { type Pokemon } from "~/lib/data/dex";

export interface SelectPokemonDialogProps {
  label: string;
  pokedex: Pokemon[];
  handleGuess: (p: Pokemon) => void;
  cancel: Dispatch<SetStateAction<boolean>>;
}

export default function SelectPokemonDialog({
  label,
  pokedex,
  cancel,
  handleGuess,
}: SelectPokemonDialogProps) {
  const [name, setName] = useState<string>("");

  function handleSubmit(pokemon: Pokemon) {
    handleGuess(pokemon);
  }

  const filteredPokedex = pokedex.filter((p) =>
    p.Pokemon.toLowerCase().startsWith(name.toLowerCase())
  );

  return (
    <div className="border-2">
      <button onClick={cancel}>Cancel</button>
      <div>{label}</div>
      <input
        className="border-2"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <div className="flex flex-col h-80 overflow-y-auto">
        {filteredPokedex.map((p: Pokemon) => (
          <button key={p.Nat} onClick={() => handleSubmit(p)}>
            {p.Pokemon}
          </button>
        ))}
      </div>
    </div>
  );
}
