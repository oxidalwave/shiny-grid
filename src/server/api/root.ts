import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { prisma } from "../db";
import { getCategories } from "~/lib/getCategories";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  categories: publicProcedure
    .input(z.object({ seed: z.string() }))
    .query(({ input }) => getCategories(input.seed)),
  guesses: publicProcedure
    .input(
      z.object({
        seed: z.string(),
        categoryIndex: z.number().int(),
      }),
    )
    .query(
      async ({ input }) =>
        await prisma.userAnswer.count({
          where: {
            seed: input.seed,
            categoryIndex: input.categoryIndex,
          },
        }),
    ),
  guess: publicProcedure
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
      return guesses / totalGuesses;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
