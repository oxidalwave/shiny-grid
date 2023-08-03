import gen from "random-seed";

import { Generations } from "./categories/generations";
import { Stats } from "./categories/stats";
import { Types } from "./categories/types";

interface CategoryCode {
  id: string;
  kind: "TYPE" | "GEN" | "STAT" | "EGGGROUPS";
}

function isInvalidCombo(categories: CategoryCode[]) {
  const codes = categories.map(({ id }) => id);
  // Check for invalid type combos
  if (codes.includes("NormalType") && codes.includes("IceType")) {
    return true;
  }
  if (codes.includes("NormalType") && codes.includes("BugType")) {
    return true;
  }
  if (codes.includes("NormalType") && codes.includes("RockType")) {
    return true;
  }
  if (codes.includes("NormalType") && codes.includes("SteelType")) {
    return true;
  }
  if (codes.includes("FireType") && codes.includes("FairyType")) {
    return true;
  }
  if (codes.includes("IceType") && codes.includes("PoisonType")) {
    return true;
  }
  if (codes.includes("GroundType") && codes.includes("FairyType")) {
    return true;
  }
  if (codes.includes("BugType") && codes.includes("DragonType")) {
    return true;
  }
  if (codes.includes("RockType") && codes.includes("GhostType")) {
    return true;
  }

  // check for duplicate codes
  if (codes[0] === codes[1]) {
    return true;
  }

  //check for invalid gen
  if (codes.includes("SteelType") && codes.includes("Generation1")) {
    return true;
  }
  if (codes.includes("DarkType") && codes.includes("Generation1")) {
    return true;
  }

  // check for invalid stat
  if (false) {
    return true;
  }

  return false;
}

function isInvalidGrid(categories: CategoryCode[]) {
  const combos: CategoryCode[][] = [
    [categories[0]!, categories[3]!],
    [categories[0]!, categories[4]!],
    [categories[0]!, categories[5]!],
    [categories[1]!, categories[3]!],
    [categories[1]!, categories[4]!],
    [categories[1]!, categories[5]!],
    [categories[2]!, categories[3]!],
    [categories[2]!, categories[4]!],
    [categories[2]!, categories[5]!],
  ];
  return combos.find((c) => isInvalidCombo(c));
}

// TODO: Reroll duplicates
export function getCategories(seed: string) {
  const rand = gen.create(seed);

  const type1 = Types[rand(Types.length)]!;
  const type2 = Types[rand(Types.length)]!;
  const type3 = Types[rand(Types.length)]!;
  const type4 = Types[rand(Types.length)]!;
  const generation = Generations[rand(Generations.length)]!;
  const stats = Stats[rand(Stats.length)]!;

  const categories = [
    {
      id: type1.id,
      kind: "TYPE" as const,
    },
    {
      id: type2.id,
      kind: "TYPE" as const,
    },
    {
      id: generation.id,
      kind: "GEN" as const,
    },
    {
      id: type3.id,
      kind: "TYPE" as const,
    },
    {
      id: type4.id,
      kind: "TYPE" as const,
    },
    {
      id: stats.id,
      kind: "STAT" as const,
    },
  ];

  if (isInvalidGrid(categories)) {
    return getCategories(`${seed}X`);
  }

  return categories;
}
