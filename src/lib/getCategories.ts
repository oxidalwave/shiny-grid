import gen from "random-seed";

import { Generations } from "./categories/generations";
import { Stats } from "./categories/stats";
import { Types } from "./categories/types";

// TODO: Reroll duplicates
export function getCategories(seed: string) {
  const rand = gen.create(seed);

  const type1 = Types[rand(Types.length)]!;
  const type2 = Types[rand(Types.length)]!;
  const type3 = Types[rand(Types.length)]!;
  const type4 = Types[rand(Types.length)]!;
  const generation = Generations[rand(Generations.length)]!;
  const stats = Stats[rand(Stats.length)]!;

  return [type1, type2, generation, type3, type4, stats].map((c) => c.id);
}
