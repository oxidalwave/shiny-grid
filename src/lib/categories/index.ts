import { type Pokemon } from '../data/dex';

export default interface Category {
	label: string;
	test: (pokemon: Pokemon) => boolean;
}
