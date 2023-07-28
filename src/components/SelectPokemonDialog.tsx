import { Input } from "@mantine/core";
import { useRef, type Dispatch, type SetStateAction } from "react";
import { type Pokemon } from "~/lib/data/dex";

export interface SelectPokemonDialogProps {
  pokedex: Pokemon[];
  setGuess: Dispatch<SetStateAction<Pokemon | undefined>>;
}

export default function SelectPokemonDialog({
  pokedex,
  setGuess,
}: SelectPokemonDialogProps) {
  const PokemonNameRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    const pokemonName = PokemonNameRef.current?.value;
    setGuess(pokedex.find((p) => p.Pokemon === pokemonName));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input ref={PokemonNameRef} />
    </form>
  );
}
