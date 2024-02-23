import { type ReactNode } from "react";
import { type Pokemon } from "./data/dex";

interface Category {
  id: string;
  label: string;
  icon?: ReactNode;
  test: (pokemon: Pokemon) => boolean;
}
export default Category;
