import { cache } from "react";
import { prisma } from "~/server/db";
export const getDex = cache(async () => {
  return await prisma.pokemon.findMany({
    select: {
      id: true,
      name: true,
      nationalDexId: true,
      hp: true,
      attack: true,
      defense: true,
      specialAttack: true,
      specialDefense: true,
      speed: true,
      generationIntroducedIn: true,
      imageUrl: true,
      types: {
        select: {
          type: {
            select: {
              id: true,
              name: true,
              generationIntroduced: true,
            },
          },
        },
      },
    },
  });
});

export default getDex;
