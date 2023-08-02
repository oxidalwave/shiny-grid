import { z } from "zod";
import { prisma } from "~/server/db";

export const PokemonValidator = z.object({
  id: z.string(),
  name: z.string(),
  nationalDexId: z.number(),
  hp: z.number(),
  attack: z.number(),
  defense: z.number(),
  specialAttack: z.number(),
  specialDefense: z.number(),
  speed: z.number(),
  evWorth: z.string().optional(),
  gender: z.string().optional(),
  evolve: z.string().optional(),
  catchRate: z.number().optional(),
  imageUrl: z.string(),
  types: z.array(
    z.object({
      type: z.object({
        name: z.string(),
        generationIntroduced: z.number(),
      }),
    })
  ),
  abilities: z.array(
    z.object({
      ability: z.object({
        name: z.string(),
      }),
    })
  ),
});

export async function getPokedex() {
  return await prisma.pokemon.findMany({
    include: {
      types: {
        include: {
          type: true,
        },
      },
      abilities: {
        include: {
          ability: true,
        },
      },
    },
  });
}
