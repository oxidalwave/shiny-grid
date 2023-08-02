import { type Pokemon } from "../data/dex";
import type Category from ".";

export const LowHp: Category = {
  id: "stat-LowHp",
  label: "HP ≤ 80",
  test: (p: Pokemon) => p.hp <= 80,
};

export const HighHp: Category = {
  id: "stat-HighHp",
  label: "HP ≥ 120",
  test: (p: Pokemon) => p.hp >= 120,
};

export const LowAtk: Category = {
  id: "stat-LowAtk",
  label: "Attack ≤ 80",
  test: (p: Pokemon) => p.attack <= 80,
};

export const HighAtk: Category = {
  id: "stat-HighAtk",
  label: "Attack ≥ 120",
  test: (p: Pokemon) => p.attack >= 120,
};

export const LowDef: Category = {
  id: "stat-LowDef",
  label: "Defense ≤ 80",
  test: (p: Pokemon) => p.defense <= 80,
};

export const HighDef: Category = {
  id: "stat-HighDef",
  label: "Defense ≥ 120",
  test: (p: Pokemon) => p.defense >= 120,
};

export const LowSpA: Category = {
  id: "stat-LowSpA",
  label: "Special Attack ≤ 80",
  test: (p: Pokemon) => p.specialAttack <= 80,
};

export const HighSpA: Category = {
  id: "stat-HighSpA",
  label: "Special Attack ≥ 120",
  test: (p: Pokemon) => p.specialAttack >= 120,
};

export const LowSpD: Category = {
  id: "stat-LowSpD",
  label: "Special Defense ≤ 80",
  test: (p: Pokemon) => p.specialDefense <= 80,
};

export const HighSpD: Category = {
  id: "stat-HighSpD",
  label: "Special Defense ≥ 120",
  test: (p: Pokemon) => p.specialDefense >= 120,
};

export const LowSpe: Category = {
  id: "stat-LowSpe",
  label: "Speed ≤ 80",
  test: (p: Pokemon) => p.speed <= 80,
};

export const HighSpe: Category = {
  id: "stat-HighSpe",
  label: "Speed ≥ 120",
  test: (p: Pokemon) => p.speed >= 120,
};

const totalStat = (p: Pokemon) =>
  p.hp + p.attack + p.defense + p.specialAttack + p.specialDefense + p.speed;

export const LowTotal: Category = {
  id: "stat-LowTotal",
  label: "Total ≤ 200",
  test: (p: Pokemon) => totalStat(p) <= 200,
};

export const HighTotal: Category = {
  id: "stat-HighTotal",
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
