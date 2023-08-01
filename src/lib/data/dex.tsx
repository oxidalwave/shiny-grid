export interface Pokemon {
  id: string;
  nationalDexId: number;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  //Total: number;
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
  evWorth: string;
  imageUrl: string;

  forms: {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    imageUrl?: string;
  }[];
  megas: {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    imageUrl?: string;
  }[];
  regionalForms: {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    imageUrl?: string;
  }[];

  //"EV Worth"?: string;
  //Gender?: string;
  //Evolve?: string;

  //"Egg Group I"?: string;
  //"Egg Group II"?: string;
  //Catch?: number;
  //imageUrl?: string;
  //forms?: Pokemon[];
  //megas?: Pokemon[];
  //regionals?: Pokemon[];
}
