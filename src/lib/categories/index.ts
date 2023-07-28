import type { Pokemon } from '$lib/data/dex';

export default interface Category {
	label: string;
	test: (pokemon: Pokemon) => boolean;
}
