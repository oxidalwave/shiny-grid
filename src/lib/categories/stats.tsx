import { type Pokemon } from "../data/dex";
import type Category from ".";

export const LowHp: Category = {
  id: "LowHp",
  label: "HP ≤ 70",
  test: (p: Pokemon) => p.hp <= 70,
};

export const HighHp: Category = {
  id: "HighHp",
  label: "HP ≥ 110",
  test: (p: Pokemon) => p.hp >= 110,
};

export const LowAtk: Category = {
  id: "LowAtk",
  label: "Attack ≤ 70",
  test: (p: Pokemon) => p.attack <= 70,
};

export const HighAtk: Category = {
  id: "HighAtk",
  label: "Attack ≥ 110",
  test: (p: Pokemon) => p.attack >= 110,
};

export const LowDef: Category = {
  id: "LowDef",
  label: "Defense ≤ 70",
  test: (p: Pokemon) => p.defense <= 70,
};

export const HighDef: Category = {
  id: "HighDef",
  label: "Defense ≥ 110",
  test: (p: Pokemon) => p.defense >= 110,
};

export const LowSpA: Category = {
  id: "LowSpA",
  label: "Special Attack ≤ 70",
  test: (p: Pokemon) => p.specialAttack <= 70,
};

export const HighSpA: Category = {
  id: "HighSpA",
  label: "Special Attack ≥ 110",
  test: (p: Pokemon) => p.specialAttack >= 110,
};

export const LowSpD: Category = {
  id: "LowSpD",
  label: "Special Defense ≤ 70",
  test: (p: Pokemon) => p.specialDefense <= 70,
};

export const HighSpD: Category = {
  id: "HighSpD",
  label: "Special Defense ≥ 110",
  test: (p: Pokemon) => p.specialDefense >= 110,
};

export const LowSpe: Category = {
  id: "LowSpe",
  label: "Speed ≤ 70",
  test: (p: Pokemon) => p.speed <= 70,
};

export const HighSpe: Category = {
  id: "HighSpe",
  label: "Speed ≥ 110",
  test: (p: Pokemon) => p.speed >= 110,
};

const totalStat = (p: Pokemon) =>
  p.hp + p.attack + p.defense + p.specialAttack + p.specialDefense + p.speed;

export const LowTotal: Category = {
  id: "LowTotal",
  label: "Total ≤ 260",
  test: (p: Pokemon) => totalStat(p) <= 260,
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
