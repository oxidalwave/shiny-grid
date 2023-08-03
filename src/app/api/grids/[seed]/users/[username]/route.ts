export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export const GET = async (
  request: Request,
  { params }: { params: { seed: string; username: string } }
) => {
  const userAnswer = await prisma.userAnswer.findMany({
    where: {
      seed: params.seed,
      user: {
        name: params.username,
      },
    },
    select: {
      categoryIndex: true,
      pokemonId: true
    },
  });

  if (userAnswer) {
    return NextResponse.json(userAnswer);
  } else {
    return NextResponse.error(); // 404 - No Answer
  }
};
