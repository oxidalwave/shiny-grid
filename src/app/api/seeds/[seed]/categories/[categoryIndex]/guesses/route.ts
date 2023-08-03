export const revalidate = 86400;

import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export const GET = async (
  request: Request,
  { params }: { params: { seed: string; categoryIndex: string } }
) => {
  const guessCount = await prisma.userAnswer.count({
    where: {
      seed: params.seed,
      categoryIndex: parseInt(params.categoryIndex),
    },
  });

  return NextResponse.json({ count: guessCount });
};
