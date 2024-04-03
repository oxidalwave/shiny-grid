import { publicProcedure } from "../trpc";
import { z } from "zod";
import { getAnswers } from "~/lib/getAnswers";
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

export const guesses = publicProcedure
  .input(
    z.object({
      seed: z.string(),
      username: z.string(),
    }),
  )
  .query(async ({ input }) => getAnswers(input.seed, input.username));
