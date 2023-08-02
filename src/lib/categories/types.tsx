import { type Pokemon } from "../data/dex";
import type Category from ".";
import Image from "next/image";

const isOfType = (p: Pokemon, t: string) =>
  p?.types?.map((t) => t.type.name)?.includes(t);

export const WaterType: Category = {
  id: "type-WaterType",
  label: "Water Type",
  icon: (
    <Image alt="Water Type" src="/types/water.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Water"),
};

export const NormalType: Category = {
  id: "type-NormalType",
  label: "Normal Type",
  icon: (
    <Image alt="Normal Type" src="/types/normal.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Normal"),
};

export const FireType: Category = {
  id: "type-FireType",
  label: "Fire Type",
  icon: <Image alt="Fire Type" src="/types/fire.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Fire"),
};

export const FightingType: Category = {
  id: "type-FightingType",
  label: "Fighting Type",
  icon: (
    <Image
      alt="Fighting Type"
      src="/types/fighting.png"
      width={64}
      height={64}
    />
  ),
  test: (p: Pokemon) => isOfType(p, "Fighting"),
};

export const FlyingType: Category = {
  id: "type-FlyingType",
  label: "Flying Type",
  icon: (
    <Image alt="Flying Type" src="/types/flying.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Flying"),
};

export const GrassType: Category = {
  id: "type-GrassType",
  label: "Grass Type",
  icon: (
    <Image alt="Grass Type" src="/types/grass.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Grass"),
};

export const PoisonType: Category = {
  id: "type-PoisonType",
  label: "Poison Type",
  icon: (
    <Image alt="Poison Type" src="/types/poison.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Poison"),
};

export const ElectricType: Category = {
  id: "type-ElectricType",
  label: "Electric Type",
  icon: (
    <Image
      alt="Electric Type"
      src="/types/electric.png"
      width={64}
      height={64}
    />
  ),
  test: (p: Pokemon) => isOfType(p, "Electric"),
};

export const GroundType: Category = {
  id: "type-GroundType",
  label: "Ground Type",
  icon: (
    <Image alt="Ground Type" src="/types/ground.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Ground"),
};

export const PsychicType: Category = {
  id: "type-PsychicType",
  label: "Psychic Type",
  icon: (
    <Image alt="Psychic Type" src="/types/psychic.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Psychic"),
};

export const RockType: Category = {
  id: "type-RockType",
  label: "Rock Type",
  icon: <Image alt="Rock Type" src="/types/rock.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Rock"),
};

export const IceType: Category = {
  id: "type-IceType",
  label: "Ice Type",
  icon: <Image alt="Ice Type" src="/types/ice.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Ice"),
};

export const BugType: Category = {
  id: "type-BugType",
  label: "Bug Type",
  icon: <Image alt="Bug Type" src="/types/bug.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Bug"),
};

export const DragonType: Category = {
  id: "type-DragonType",
  label: "Dragon Type",
  icon: (
    <Image alt="Dragon Type" src="/types/dragon.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Dragon"),
};

export const GhostType: Category = {
  id: "type-GhostType",
  label: "Ghost Type",
  icon: (
    <Image alt="Ghost Type" src="/types/ghost.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Ghost"),
};

export const DarkType: Category = {
  id: "type-DarkType",
  label: "Dark Type",
  icon: <Image alt="Dark Type" src="/types/dark.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Dark"),
};

export const SteelType: Category = {
  id: "type-SteelType",
  label: "Steel Type",
  icon: (
    <Image alt="Steel Type" src="/types/steel.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Steel"),
};

export const FairyType: Category = {
  id: "type-FairyType",
  label: "Fairy Type",
  icon: (
    <Image alt="Fairy Type" src="/types/fairy.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Fairy"),
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
  FairyType,
];
