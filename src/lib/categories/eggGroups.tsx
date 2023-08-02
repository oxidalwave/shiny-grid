import type Category from ".";
import { type Pokemon } from "../data/dex";

export const MonsterEggGroup: Category = {
  id: "monster",
  label: "Monster Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Monster"),
};

export const GrassEggGroup: Category = {
  id: "grass",
  label: "Grass Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Grass"),
};

export const DragonEggGroup: Category = {
  id: "dragon",
  label: "Dragon Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Dragon"),
};

export const Water1EggGroup: Category = {
  id: "water1",
  label: "Water 1 Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Water 1"),
};

export const BugEggGroup: Category = {
  id: "bug",
  label: "Bug Egg Group",
  test: (p: Pokemon) => !!p.eggGroups.find((eg) => eg.eggGroup.name === "Bug"),
};

export const FlyingEggGroup: Category = {
  id: "flying",
  label: "Flying Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Flying"),
};

export const FieldEggGroup: Category = {
  id: "field",
  label: "Field Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Field"),
};

export const FairyEggGroup: Category = {
  id: "fairy",
  label: "Fairy Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Fairy"),
};

export const HumanLikeEggGroup: Category = {
  id: "humanlike",
  label: "Human-Like Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Human-Like"),
};

export const Water3EggGroup: Category = {
  id: "water3",
  label: "Water 3 Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Water 3"),
};

export const MineralEggGroup: Category = {
  id: "mineral",
  label: "Mineral Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Mineral"),
};

export const AmorphousEggGroup: Category = {
  id: "amorphous",
  label: "Amorphous Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Amorphous"),
};

export const Water2EggGroup: Category = {
  id: "water2",
  label: "Water 2 Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Water 2"),
};

export const DittoEggGroup: Category = {
  id: "ditto",
  label: "Ditto Egg Group",
  test: (p: Pokemon) =>
    !!p.eggGroups.find((eg) => eg.eggGroup.name === "Ditto"),
};

export const EggGroups = [
  MonsterEggGroup,
  GrassEggGroup,
  DragonEggGroup,
  Water1EggGroup,
  BugEggGroup,
  FlyingEggGroup,
  FieldEggGroup,
  FairyEggGroup,
  HumanLikeEggGroup,
  Water3EggGroup,
  MineralEggGroup,
  AmorphousEggGroup,
  Water2EggGroup,
  DittoEggGroup,
];
