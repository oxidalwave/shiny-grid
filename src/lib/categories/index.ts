import { type ReactNode } from "react";
import { type Pokemon } from "../data/dex";
import { Stats } from "./stats";
import { Types } from "./types";
import { Generations } from "./generations";
import { EggGroups } from "./eggGroups";

type Category = {
  id: string;
  label: string;
  icon?: ReactNode;
  test: (pokemon: Pokemon) => boolean;
}
export default Category

type CategoryId = {
  kind: "TYPE" | "GEN" | "STAT" | "EGGGROUP";
  id: string;
}

export function getCategoryFromId({ kind, id }: CategoryId): Category {
  if (kind === "TYPE") {
    return Types.find((t) => t.id === id)!;
  }
  if (kind === "GEN") {
    return Generations.find((g) => g.id === id)!;
  }
  if (kind === "STAT") {
    return Stats.find((s) => s.id === id)!;
  }
  if (kind === "EGGGROUP") {
    return EggGroups.find((e) => e.id === id)!;
  }
  return {
    id: "ERROR",
    label: "ERROR",
    test: () => false,
  };
}
