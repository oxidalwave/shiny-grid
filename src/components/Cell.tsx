import { Button, Center, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { type Dispatch, type SetStateAction, useState } from "react";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import SelectPokemonDialog from "./SelectPokemonDialog";

export interface CellProps {
  pokedex: Pokemon[];
  guesses: Pokemon[];
  setGuesses: Dispatch<SetStateAction<Pokemon[]>>;
  categories: Category[];
}

export default function Cell({
  pokedex,
  guesses,
  setGuesses,
  categories,
}: CellProps) {
  const [guess, setGuess] = useState<Pokemon | undefined>(undefined);
  const [opened, { open, close }] = useDisclosure(false);

  function handleOpenSelect() {
    open();
  }

  if (!guess) {
    return (
      <>
        <Modal opened={opened} onClose={close}>
          <SelectPokemonDialog pokedex={pokedex} setGuess={setGuess} />
        </Modal>
        <Button onClick={handleOpenSelect}>Guess</Button>
      </>
    );
  }

  if (categories[0]?.test(guess) && categories[1]?.test(guess)) {
    return (
      <Center>
        <Image
          alt={guess.Pokemon}
          src={`/sprites/${guess.Pokemon.toLowerCase()}.png`}
          width={56}
          height={42}
        />
      </Center>
    );
  }
  return (
    <Center bg="red">
      <Image
        alt={guess.Pokemon}
        src={`/sprites/${guess.Pokemon.toLowerCase()}.png`}
        width={56}
        height={42}
      />
    </Center>
  );
}
