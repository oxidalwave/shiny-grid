import { type Pokemon } from '../data/dex';
import type Category from '.';

export const WaterType: Category = {
	label: 'Water Type',
	test: (p: Pokemon) => p['Type I'] === 'Water' || p['Type II'] === 'Water'
};

export const NormalType: Category = {
	label: 'Normal Type',
	test: (p: Pokemon) => p['Type I'] === 'Normal' || p['Type II'] === 'Normal'
};
export const FireType: Category = {
	label: 'Fire Type',
	test: (p: Pokemon) => p['Type I'] === 'Fire' || p['Type II'] === 'Fire'
};
export const FightingType: Category = {
	label: 'Fighting Type',
	test: (p: Pokemon) => p['Type I'] === 'Fighting' || p['Type II'] === 'Fighting'
};
export const FlyingType: Category = {
	label: 'Flying Type',
	test: (p: Pokemon) => p['Type I'] === 'Flying' || p['Type II'] === 'Flying'
};
export const GrassType: Category = {
	label: 'Grass Type',
	test: (p: Pokemon) => p['Type I'] === 'Grass' || p['Type II'] === 'Grass'
};
export const PoisonType: Category = {
	label: 'Poison Type',
	test: (p: Pokemon) => p['Type I'] === 'Poison' || p['Type II'] === 'Poison'
};
export const ElectricType: Category = {
	label: 'Electric Type',
	test: (p: Pokemon) => p['Type I'] === 'Electric' || p['Type II'] === 'Electric'
};
export const GroundType: Category = {
	label: 'Ground Type',
	test: (p: Pokemon) => p['Type I'] === 'Ground' || p['Type II'] === 'Ground'
};
export const PsychicType: Category = {
	label: 'Psychic Type',
	test: (p: Pokemon) => p['Type I'] === 'Psychic' || p['Type II'] === 'Psychic'
};
export const RockType: Category = {
	label: 'Rock Type',
	test: (p: Pokemon) => p['Type I'] === 'Rock' || p['Type II'] === 'Rock'
};
export const IceType: Category = {
	label: 'Ice Type',
	test: (p: Pokemon) => p['Type I'] === 'Ice' || p['Type II'] === 'Ice'
};
export const BugType: Category = {
	label: 'Bug Type',
	test: (p: Pokemon) => p['Type I'] === 'Bug' || p['Type II'] === 'Bug'
};
export const DragonType: Category = {
	label: 'Dragon Type',
	test: (p: Pokemon) => p['Type I'] === 'Dragon' || p['Type II'] === 'Dragon'
};
export const GhostType: Category = {
	label: 'Ghost Type',
	test: (p: Pokemon) => p['Type I'] === 'Ghost' || p['Type II'] === 'Ghost'
};
export const DarkType: Category = {
	label: 'Dark Type',
	test: (p: Pokemon) => p['Type I'] === 'Dark' || p['Type II'] === 'Dark'
};
export const SteelType: Category = {
	label: 'Steel Type',
	test: (p: Pokemon) => p['Type I'] === 'Steel' || p['Type II'] === 'Steel'
};
export const FairyType: Category = {
	label: 'Fairy Type',
	test: (p: Pokemon) => p['Type I'] === 'Fairy' || p['Type II'] === 'Fairy'
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
	FairyType
];
