import { createTRPCRouter } from "~/server/api/trpc";
import { guess } from "./routers/guess";
import { guesses } from "./routers/guesses";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  guess: guess,
  guesses,
});

// export type definition of API
export type AppRouter = typeof appRouter;
