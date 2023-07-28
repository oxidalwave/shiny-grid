import type Category from '.';
import { type Pokemon } from '../data/dex';

export const Generation1: Category = {
	label: 'Generation 1',
	test: (p: Pokemon) => p.Nat >= 1 && p.Nat < 152
};

export const Generation2: Category = {
	label: 'Generation 2',
	test: (p: Pokemon) => p.Nat >= 152 && p.Nat <= 251
};

export const Generation3: Category = {
	label: 'Generation 3',
	test: (p: Pokemon) => p.Nat >= 252 && p.Nat < 387
};

export const Generation4: Category = {
	label: 'Generation 4',
	test: (p: Pokemon) => p.Nat >= 387 && p.Nat < 494
};

export const Generation5: Category = {
	label: 'Generation 5',
	test: (p: Pokemon) => p.Nat >= 494 && p.Nat < 650
};

export const Generation6: Category = {
	label: 'Generation 6',
	test: (p: Pokemon) => p.Nat >= 650 && p.Nat < 722
};

export const Generation7: Category = {
	label: 'Generation 7',
	test: (p: Pokemon) => p.Nat >= 722 && p.Nat < 810
};

export const Generation8: Category = {
	label: 'Generation 8',
	test: (p: Pokemon) => p.Nat >= 810 && p.Nat < 906
};

export const Generation9: Category = {
	label: 'Generation 9',
	test: (p: Pokemon) => p.Nat >= 906 && p.Nat < 1011
};

export const Generations = [
	Generation1,
	Generation2,
	Generation3,
	Generation4,
	Generation5,
	Generation6,
	Generation7,
	Generation8,
	Generation9
];
