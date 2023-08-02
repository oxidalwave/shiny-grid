import { type Pokemon } from "../data/dex";
import type Category from ".";

export const LowHp: Category = {
  id: "LowHp",
  label: "HP ≤ 80",
  test: (p: Pokemon) => p.hp <= 80,
};

export const HighHp: Category = {
  id: "HighHp",
  label: "HP ≥ 120",
  test: (p: Pokemon) => p.hp >= 120,
};

export const LowAtk: Category = {
  id: "LowAtk",
  label: "Attack ≤ 80",
  test: (p: Pokemon) => p.attack <= 80,
};

export const HighAtk: Category = {
  id: "HighAtk",
  label: "Attack ≥ 120",
  test: (p: Pokemon) => p.attack >= 120,
};

export const LowDef: Category = {
  id: "LowDef",
  label: "Defense ≤ 80",
  test: (p: Pokemon) => p.defense <= 80,
};

export const HighDef: Category = {
  id: "HighDef",
  label: "Defense ≥ 120",
  test: (p: Pokemon) => p.defense >= 120,
};

export const LowSpA: Category = {
  id: "LowSpA",
  label: "Special Attack ≤ 80",
  test: (p: Pokemon) => p.specialAttack <= 80,
};

export const HighSpA: Category = {
  id: "HighSpA",
  label: "Special Attack ≥ 120",
  test: (p: Pokemon) => p.specialAttack >= 120,
};

export const LowSpD: Category = {
  id: "LowSpD",
  label: "Special Defense ≤ 80",
  test: (p: Pokemon) => p.specialDefense <= 80,
};

export const HighSpD: Category = {
  id: "HighSpD",
  label: "Special Defense ≥ 120",
  test: (p: Pokemon) => p.specialDefense >= 120,
};

export const LowSpe: Category = {
  id: "LowSpe",
  label: "Speed ≤ 80",
  test: (p: Pokemon) => p.speed <= 80,
};

export const HighSpe: Category = {
  id: "HighSpe",
  label: "Speed ≥ 120",
  test: (p: Pokemon) => p.speed >= 120,
};

const totalStat = (p: Pokemon) =>
  p.hp + p.attack + p.defense + p.specialAttack + p.specialDefense + p.speed;

export const LowTotal: Category = {
  id: "LowTotal",
  label: "Total ≤ 200",
  test: (p: Pokemon) => totalStat(p) <= 200,
};

export const HighTotal: Category = {
  id: "HighTotal",
  label: "Total ≥ 600",
  test: (p: Pokemon) => totalStat(p) >= 600,
};

export const Stats = [
  LowHp,
  HighHp,
  LowAtk,
  HighAtk,
  LowDef,
  HighDef,
  LowSpA,
  HighSpA,
  LowSpD,
  HighSpD,
  LowSpe,
  HighSpe,
  LowTotal,
  HighTotal,
];
