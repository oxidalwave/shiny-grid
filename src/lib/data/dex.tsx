import { type z } from "zod";
import { type PokemonValidator } from "./pokemon";

export type Pokemon = z.infer<typeof PokemonValidator>;
