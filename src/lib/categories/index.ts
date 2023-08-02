import { type ReactNode } from "react";
import { type Pokemon } from "../data/dex";
import { Stats } from "./stats";
import { Types } from "./types";
import { Generations } from "./generations";

export default interface Category {
  id: string;
  label: string;
  icon?: ReactNode;
  test: (pokemon: Pokemon) => boolean;
}

export function getCategoryFromId(id: string): Category {
  if (id.startsWith("type")) {
    return Types.find((t) => t.id === id)!;
  }
  if (id.startsWith("gen")) {
    return Generations.find((g) => g.id === id)!;
  }
  if (id.startsWith("stat")) {
    return Stats.find((s) => s.id === id)!;
  }
  return {
    id: "ERROR",
    label: "ERROR",
    test: () => false,
  };
}
