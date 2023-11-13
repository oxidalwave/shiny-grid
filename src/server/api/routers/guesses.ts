import { prisma } from "~/server/db";
import { publicProcedure } from "../trpc";
import { z } from "zod";

export const guesses = publicProcedure
  .input(
    z.object({
      seed: z.string(),
      categoryIndex: z.number().int(),
    }),
  )
  .query(async ({ input }) => {
    const guessCount = await prisma.userAnswer.count({
      where: {
        seed: input.seed,
        categoryIndex: input.categoryIndex,
      },
    });

    return { count: guessCount };
  });
