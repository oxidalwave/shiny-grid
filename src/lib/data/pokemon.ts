import { z } from "zod";

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
        id: z.string(),
        name: z.string(),
      }),
    })
  ),
  types: z.array(
    z.object({
      type: z.object({
        id: z.string(),
        name: z.string(),
        generationIntroduced: z.number(),
      }),
    })
  ),
  abilities: z.array(
    z.object({
      isHidden: z.boolean(),
      ability: z.object({
        id: z.string(),
        name: z.string(),
      }),
    })
  ),
});
