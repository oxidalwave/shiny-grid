import { prisma } from "~/server/db";
import { publicProcedure } from "../trpc";
import { z } from "zod";

export const makeGuess = publicProcedure
  .input(
    z.object({
      seed: z.string(),
      username: z.string(),
      categoryIndex: z.number().int(),
      pokemonId: z.string(),
    }),
  )
  .mutation(async ({ input }) => {
    const user = await prisma.user.findFirst({
      // TODO: Consolidated Users
      where: {
        name: input.username,
      },
    });

    if (!user) {
      throw Error("");
    }

    // TODO: Should account for regionals/megas/alternates
    return await prisma.userAnswer.create({
      data: {
        seed: input.seed,
        userId: user.id,
        categoryIndex: input.categoryIndex,
        pokemonId: input.pokemonId,
      },
    });
  });
