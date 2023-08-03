export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export const GET = async (
  request: Request,
  {
    params,
  }: { params: { seed: string; username: string; categoryIndex: string } },
) => {
  const user = await prisma.user.findFirst({
    // TODO: Consolidated Users
    where: {
      name: params.username,
    },
  });

  if (!user) {
    return NextResponse.error(); // 404 - No User
  }

  const userAnswer = await prisma.userAnswer.findUnique({
    where: {
      seed_userId_categoryIndex: {
        seed: params.seed,
        userId: user.id,
        categoryIndex: parseInt(params.categoryIndex),
      },
    },
    include: {
      pokemon: true,
    },
  });

  if (userAnswer) {
    return NextResponse.json(userAnswer.pokemon);
  } else {
    return NextResponse.error(); // 404 - No Answer
  }
};

export const POST = async (
  request: Request,
  {
    params,
  }: { params: { seed: string; username: string; categoryIndex: string } },
) => {
  const body = (await request.json()) as { id: string };

  const answer = body.id;

  const user = await prisma.user.findFirst({
    // TODO: Consolidated Users
    where: {
      name: params.username,
    },
  });

  if (!user) {
    return NextResponse.error(); // 404 - No User
  }

  // TODO: Should account for regionals/megas/alternates
  const userAnswer = await prisma.userAnswer.create({
    data: {
      seed: params.seed,
      userId: user.id,
      categoryIndex: parseInt(params.categoryIndex),
      pokemonId: answer,
    },
  });

  if (userAnswer) {
    return NextResponse.json(userAnswer);
  } else {
    return NextResponse.error(); // 404 - No Answer
  }
};
