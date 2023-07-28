import { type ReactNode } from "react";
import { type Pokemon } from "../data/dex";

export default interface Category {
  label: string;
  icon?: ReactNode;
  test: (pokemon: Pokemon) => boolean;
}
