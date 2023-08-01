import { type Pokemon } from "../data/dex";
import type Category from ".";

export const LowHp: Category = {
  label: "HP ≤ 80",
  test: (p: Pokemon) => p.hp <= 80,
};

export const HighHp: Category = {
  label: "HP ≥ 120",
  test: (p: Pokemon) => p.hp >= 120,
};

export const LowAtk: Category = {
  label: "Attack ≤ 80",
  test: (p: Pokemon) => p.attack <= 80,
};

export const HighAtk: Category = {
  label: "Attack ≥ 120",
  test: (p: Pokemon) => p.attack >= 120,
};

export const LowDef: Category = {
  label: "Defense ≤ 80",
  test: (p: Pokemon) => p.defense <= 80,
};

export const HighDef: Category = {
  label: "Defense ≥ 120",
  test: (p: Pokemon) => p.defense >= 120,
};

export const LowSpA: Category = {
  label: "Special Attack ≤ 80",
  test: (p: Pokemon) => p.specialAttack <= 80,
};

export const HighSpA: Category = {
  label: "Special Attack ≥ 120",
  test: (p: Pokemon) => p.specialAttack >= 120,
};

export const LowSpD: Category = {
  label: "Special Defense ≤ 80",
  test: (p: Pokemon) => p.specialDefense <= 80,
};

export const HighSpD: Category = {
  label: "Special Defense ≥ 120",
  test: (p: Pokemon) => p.specialDefense >= 120,
};

export const LowSpe: Category = {
  label: "Speed ≤ 80",
  test: (p: Pokemon) => p.speed <= 80,
};

export const HighSpe: Category = {
  label: "Speed ≥ 120",
  test: (p: Pokemon) => p.speed >= 120,
};

const totalStat = (p: Pokemon) =>
  p.hp + p.attack + p.defense + p.specialAttack + p.specialDefense + p.speed;

export const LowTotal: Category = {
  label: "Total ≤ 200",
  test: (p: Pokemon) => totalStat(p) <= 200,
};

export const HighTotal: Category = {
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
