export const revalidate = 86400;

import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const pokemon = await prisma.pokemon.findUnique({
    where: {
      id: params.id,
    },
    include: {
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

  return NextResponse.json(pokemon);
};
