"use client";

import { SimpleGrid, Text } from "@mantine/core";
import { useState } from "react";
import Cell from "~/components/Cell";
import { Generations } from "~/lib/categories/generations";
import { Stats } from "~/lib/categories/stats";
import { Types } from "~/lib/categories/types";
import { type Pokemon } from "~/lib/data/dex";

export interface GridProps {
  dex: Pokemon[];
  seed: number;
}

export default function Grid({ dex, seed }: GridProps) {
  const type1 = Types[seed % Types.length]!;
  const type2 = Types[(seed % Types.length) + 1]!;
  const type3 = Types[(seed % Types.length) + 2]!;
  const type4 = Types[(seed % Types.length) + 3]!;
  const generation = Generations[seed % Generations.length]!;
  const stats = Stats[seed % Stats.length]!;

  const categories = [type1, type2, generation, type3, type4, stats];

  const [guesses, setGuesses] = useState<Pokemon[]>([]);

  return (
    <SimpleGrid cols={4}>
      <div />
      <Text fz="xl">{categories[0]?.label}</Text>
      <Text fz="xl">{categories[1]?.label}</Text>
      <Text fz="xl">{categories[2]?.label}</Text>
      <Text fz="xl">{categories[3]?.label}</Text>
      <Cell
        categories={[categories[0]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Cell
        categories={[categories[1]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Cell
        categories={[categories[2]!, categories[3]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Text fz="xl">{categories[4]?.label}</Text>
      <Cell
        categories={[categories[0]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Cell
        categories={[categories[1]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Cell
        categories={[categories[2]!, categories[4]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Text fz="xl">{categories[5]?.label}</Text>
      <Cell
        categories={[categories[0]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Cell
        categories={[categories[1]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Cell
        categories={[categories[2]!, categories[5]!]}
        pokedex={dex}
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </SimpleGrid>
  );
}
