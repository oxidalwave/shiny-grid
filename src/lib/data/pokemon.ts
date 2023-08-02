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
  // evWorth: z.string(),
  // gender: z.string(),
  // evolve: z.string(),
  // catchRate: z.number(),
  imageUrl: z.string().optional(),
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
  const pokemon = await prisma.pokemon.findMany({
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
      forms: {
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
      },
      regionalForms: {
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
      },
      megas: {
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
      },
    },
  });

  return pokemon.flatMap((p) => [
    p,
    ...p.forms.map((f, i) => ({
      ...f,
      nationalDexId: p.nationalDexId + i / 1000,
    })),
    ...p.megas.map((f, i) => ({
      ...f,
      nationalDexId: p.nationalDexId + i / 2000,
    })),
    ...p.regionalForms.map((f, i) => ({
      ...f,
      nationalDexId: p.nationalDexId + i / 3000,
    })),
  ]);
}
