import dexdata from "~/lib/data/dex.json";
import forms from "~/lib/data/forms.json";
import mega from "~/lib/data/mega.json";
import regional from "~/lib/data/regional.json";

export type Type =
  | "Normal"
  | "Fire"
  | "Fighting"
  | "Water"
  | "Flying"
  | "Grass"
  | "Poison"
  | "Electric"
  | "Ground"
  | "Psychic"
  | "Rock"
  | "Ice"
  | "Bug"
  | "Dragon"
  | "Ghost"
  | "Dark"
  | "Steel"
  | "Fairy"
  | "???";

export interface Pokemon {
  Nat: number;
  Pokemon: string;
  HP: number;
  Atk: number;
  Def: number;
  SpA: number;
  SpD: number;
  Spe: number;
  Total: number;
  "Type I": Type;
  "Type II": Type;
  "Ability I": string;

  "Ability II"?: string;
  "Hidden Ability"?: string;
  "EV Worth"?: string;
  Gender?: string;
  Evolve?: string;

  "Egg Group I"?: string;
  "Egg Group II"?: string;
  Catch?: number;
  imageUrl?: string;
  forms?: Pokemon[];
  megas?: Pokemon[];
  regionals?: Pokemon[];
}

const getImageUrl = (name: string) =>
  `/sprites/${name
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("♀", "f")
    .replaceAll("♂", "m")}.png`;

const dex: Pokemon[] = dexdata.map(({ Nat, ...d }) => ({
  Nat,
  ...d,
  imageUrl: getImageUrl(d.Pokemon),
  forms: forms.filter((f) => f.Nat === Nat),
  megas: mega.filter((m) => m.Nat === Nat),
  regionals: regional.filter((r) => r.Nat === Nat),
})) as Pokemon[];

export default dex;
