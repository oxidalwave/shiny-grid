export interface Pokemon {
  nationalDexId: number;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  imageUrl?: string;
  types: {
    type: {
      name: string;
      generationIntroduced: number;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}
