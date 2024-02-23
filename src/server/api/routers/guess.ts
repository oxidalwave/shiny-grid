import { prisma } from "~/server/db";
import { publicProcedure } from "../trpc";
import { z } from "zod";
import getGuess from "~/lib/getGuess";

export const guess = publicProcedure
  .input(
    z.object({
      seed: z.string(),
      categoryIndex: z.number().int(),
      pokemonId: z.string(),
    }),
  )
  .query(async ({ input }) => getGuess(input));
