import { type Pokemon } from "../data/dex";
import type Category from ".";
import Image from "next/image";

export const WaterType: Category = {
  label: "Water Type",
  icon: <Image alt="Water Type" src="/types/water.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Water" || p["Type II"] === "Water",
};

export const NormalType: Category = {
  label: "Normal Type",
  icon: <Image alt="Normal Type" src="/types/normal.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Normal" || p["Type II"] === "Normal",
};
export const FireType: Category = {
  label: "Fire Type",
  icon: <Image alt="Fire Type" src="/types/fire.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Fire" || p["Type II"] === "Fire",
};
export const FightingType: Category = {
  label: "Fighting Type",
  icon: <Image alt="Fighting Type" src="/types/fighting.png" width={128} height={128} />,
  test: (p: Pokemon) =>
    p["Type I"] === "Fighting" || p["Type II"] === "Fighting",
};
export const FlyingType: Category = {
  label: "Flying Type",
  icon: <Image alt="Flying Type" src="/types/flying.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Flying" || p["Type II"] === "Flying",
};
export const GrassType: Category = {
  label: "Grass Type",
  icon: <Image alt="Grass Type" src="/types/grass.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Grass" || p["Type II"] === "Grass",
};
export const PoisonType: Category = {
  label: "Poison Type",
  icon: <Image alt="Poison Type" src="/types/poison.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Poison" || p["Type II"] === "Poison",
};
export const ElectricType: Category = {
  label: "Electric Type",
  icon: <Image alt="Electric Type" src="/types/electric.png" width={128} height={128} />,
  test: (p: Pokemon) =>
    p["Type I"] === "Electric" || p["Type II"] === "Electric",
};
export const GroundType: Category = {
  label: "Ground Type",
  icon: <Image alt="Ground Type" src="/types/ground.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Ground" || p["Type II"] === "Ground",
};
export const PsychicType: Category = {
  label: "Psychic Type",
  icon: <Image alt="Psychic Type" src="/types/psychic.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Psychic" || p["Type II"] === "Psychic",
};
export const RockType: Category = {
  label: "Rock Type",
  icon: <Image alt="Rock Type" src="/types/rock.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Rock" || p["Type II"] === "Rock",
};
export const IceType: Category = {
  label: "Ice Type",
  icon: <Image alt="Ice Type" src="/types/ice.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Ice" || p["Type II"] === "Ice",
};
export const BugType: Category = {
  label: "Bug Type",
  icon: <Image alt="Bug Type" src="/types/bug.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Bug" || p["Type II"] === "Bug",
};
export const DragonType: Category = {
  label: "Dragon Type",
  icon: <Image alt="Dragon Type" src="/types/dragon.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Dragon" || p["Type II"] === "Dragon",
};
export const GhostType: Category = {
  label: "Ghost Type",
  icon: <Image alt="Ghost Type" src="/types/ghost.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Ghost" || p["Type II"] === "Ghost",
};
export const DarkType: Category = {
  label: "Dark Type",
  icon: <Image alt="Dark Type" src="/types/dark.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Dark" || p["Type II"] === "Dark",
};
export const SteelType: Category = {
  label: "Steel Type",
  icon: <Image alt="Steel Type" src="/types/steel.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Steel" || p["Type II"] === "Steel",
};
export const FairyType: Category = {
  label: "Fairy Type",
  icon: <Image alt="Fairy Type" src="/types/fairy.png" width={128} height={128} />,
  test: (p: Pokemon) => p["Type I"] === "Fairy" || p["Type II"] === "Fairy",
};

export const Types = [
  WaterType,
  NormalType,
  FireType,
  FightingType,
  FlyingType,
  GrassType,
  PoisonType,
  ElectricType,
  GroundType,
  PsychicType,
  RockType,
  IceType,
  BugType,
  DragonType,
  GhostType,
  DarkType,
  SteelType,
  FairyType,
];
