import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export const GET = async () => {
  const pokedex = await prisma.pokemon.findMany({
    include: {
      generationIntroducedIn: true,
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
      abilities: {
        select: {
          isHidden: true,
          ability: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      eggGroups: {
        select: {
          eggGroup: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(pokedex);
};
