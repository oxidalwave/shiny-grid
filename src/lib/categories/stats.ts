import type { Pokemon } from '$lib/data/dex';
import type Category from '.';

export const LowHp: Category = {
	label: 'HP ≤ 80',
	test: (p: Pokemon) => p.HP <= 80
};

export const HighHp: Category = {
	label: 'HP ≥ 120',
	test: (p: Pokemon) => p.HP >= 120
};

export const LowAtk: Category = {
	label: 'Attack ≤ 80',
	test: (p: Pokemon) => p.Atk <= 80
};

export const HighAtk: Category = {
	label: 'Attack ≥ 120',
	test: (p: Pokemon) => p.Atk >= 120
};

export const LowDef: Category = {
	label: 'Defense ≤ 80',
	test: (p: Pokemon) => p.Def <= 80
};

export const HighDef: Category = {
	label: 'Defense ≥ 120',
	test: (p: Pokemon) => p.Def >= 120
};

export const LowSpA: Category = {
	label: 'Special Attack ≤ 80',
	test: (p: Pokemon) => p.SpA <= 80
};

export const HighSpA: Category = {
	label: 'Special Attack ≥ 120',
	test: (p: Pokemon) => p.SpA >= 120
};

export const LowSpD: Category = {
	label: 'Special Defense ≤ 80',
	test: (p: Pokemon) => p.SpD <= 80
};

export const HighSpD: Category = {
	label: 'Special Defense ≥ 120',
	test: (p: Pokemon) => p.SpD >= 120
};

export const LowSpe: Category = {
	label: 'Speed ≤ 80',
	test: (p: Pokemon) => p.Spe <= 80
};

export const HighSpe: Category = {
	label: 'Speed ≥ 120',
	test: (p: Pokemon) => p.Spe >= 120
};

export const LowTotal: Category = {
	label: 'Total ≤ 200',
	test: (p: Pokemon) => p.Total <= 200
};

export const HighTotal: Category = {
	label: 'Total ≥ 600',
	test: (p: Pokemon) => p.Total >= 600
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
	HighTotal
];
