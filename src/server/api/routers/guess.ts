import { prisma } from "~/server/db";
import { publicProcedure } from "../trpc";
import { z } from "zod";

export const guess = publicProcedure
  .input(
    z.object({
      seed: z.string(),
      categoryIndex: z.number().int(),
      pokemonId: z.string(),
    }),
  )
  .query(async ({ input }) => {
    const [totalGuesses, guesses] = await Promise.all([
      prisma.userAnswer.count({
        where: {
          seed: input.seed,
          categoryIndex: input.categoryIndex,
        },
      }),
      prisma.userAnswer.count({
        where: {
          seed: input.seed,
          categoryIndex: input.categoryIndex,
          pokemonId: input.pokemonId,
        },
      }),
    ]);

    return { percent: guesses / totalGuesses };
  });
