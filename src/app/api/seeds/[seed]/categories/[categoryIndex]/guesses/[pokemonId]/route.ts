export const revalidate = 86400;

import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export const GET = async (
  request: Request,
  {
    params,
  }: { params: { seed: string; categoryIndex: string; pokemonId: string } }
) => {
  const [totalGuesses, guesses] = await Promise.all([
    prisma.userAnswer.count({
      where: {
        seed: params.seed,
        categoryIndex: parseInt(params.categoryIndex),
      },
    }),
    prisma.userAnswer.count({
      where: {
        seed: params.seed,
        categoryIndex: parseInt(params.categoryIndex),
        pokemonId: params.pokemonId,
      },
    }),
  ]);

  return NextResponse.json({ percent: guesses / totalGuesses });
};
