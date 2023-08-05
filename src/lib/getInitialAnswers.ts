import { prisma } from "~/server/db";

export const getInitialAnswers = async (seed: string, username: string) => {
  return await prisma.userAnswer.findMany({
    where: {
      seed: seed,
      user: {
        name: username,
      },
    },
    select: {
      categoryIndex: true,
      pokemonId: true,
    },
  });
};
