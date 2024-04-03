import { prisma } from "~/server/db";

export const getAnswers = async (seed: string, username: string) => {
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
