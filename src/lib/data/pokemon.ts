import { z } from "zod";
import { prisma } from "~/server/db";

export const PokemonValidator = z.object({
  id: z.string(),
  name: z.string(),
  kind: z
    .literal("POKEMON")
    .or(z.literal("REGIONAL"))
    .or(z.literal("ALTERNATE"))
    .or(z.literal("MEGA")),
  nationalDexId: z.number().int(),
  hp: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  specialAttack: z.number().int(),
  specialDefense: z.number().int(),
  speed: z.number().int(),
  evWorth: z.string().nullish(),
  gender: z.string().nullish(),
  evolve: z.string().nullish(),
  catchRate: z.number().int().nullish(),
  imageUrl: z.string(),
  eggGroups: z.array(
    z.object({
      eggGroup: z.object({
        name: z.string(),
      }),
    })
  ),
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
      isHidden: z.boolean(),
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
      eggGroups: {
        include: {
          eggGroup: true,
        },
      },
    },
  });
}
