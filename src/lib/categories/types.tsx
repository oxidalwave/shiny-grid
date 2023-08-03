/* eslint-disable @next/next/no-img-element */
import { type Pokemon } from "../data/dex";
import type Category from ".";

const isOfType = (p: Pokemon, t: string) =>
  p?.types?.map((t) => t.type.name)?.includes(t);

export const WaterType: Category = {
  id: "WaterType",
  label: "Water Type",
  icon: (
    <img alt="Water Type" src="/types/water.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Water"),
};

export const NormalType: Category = {
  id: "NormalType",
  label: "Normal Type",
  icon: (
    <img alt="Normal Type" src="/types/normal.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Normal"),
};

export const FireType: Category = {
  id: "FireType",
  label: "Fire Type",
  icon: <img alt="Fire Type" src="/types/fire.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Fire"),
};

export const FightingType: Category = {
  id: "FightingType",
  label: "Fighting Type",
  icon: (
    <img
      alt="Fighting Type"
      src="/types/fighting.png"
      width={64}
      height={64}
    />
  ),
  test: (p: Pokemon) => isOfType(p, "Fighting"),
};

export const FlyingType: Category = {
  id: "FlyingType",
  label: "Flying Type",
  icon: (
    <img alt="Flying Type" src="/types/flying.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Flying"),
};

export const GrassType: Category = {
  id: "GrassType",
  label: "Grass Type",
  icon: (
    <img alt="Grass Type" src="/types/grass.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Grass"),
};

export const PoisonType: Category = {
  id: "PoisonType",
  label: "Poison Type",
  icon: (
    <img alt="Poison Type" src="/types/poison.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Poison"),
};

export const ElectricType: Category = {
  id: "ElectricType",
  label: "Electric Type",
  icon: (
    <img
      alt="Electric Type"
      src="/types/electric.png"
      width={64}
      height={64}
    />
  ),
  test: (p: Pokemon) => isOfType(p, "Electric"),
};

export const GroundType: Category = {
  id: "GroundType",
  label: "Ground Type",
  icon: (
    <img alt="Ground Type" src="/types/ground.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Ground"),
};

export const PsychicType: Category = {
  id: "PsychicType",
  label: "Psychic Type",
  icon: (
    <img alt="Psychic Type" src="/types/psychic.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Psychic"),
};

export const RockType: Category = {
  id: "RockType",
  label: "Rock Type",
  icon: <img alt="Rock Type" src="/types/rock.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Rock"),
};

export const IceType: Category = {
  id: "IceType",
  label: "Ice Type",
  icon: <img alt="Ice Type" src="/types/ice.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Ice"),
};

export const BugType: Category = {
  id: "BugType",
  label: "Bug Type",
  icon: <img alt="Bug Type" src="/types/bug.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Bug"),
};

export const DragonType: Category = {
  id: "DragonType",
  label: "Dragon Type",
  icon: (
    <img alt="Dragon Type" src="/types/dragon.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Dragon"),
};

export const GhostType: Category = {
  id: "GhostType",
  label: "Ghost Type",
  icon: (
    <img alt="Ghost Type" src="/types/ghost.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Ghost"),
};

export const DarkType: Category = {
  id: "DarkType",
  label: "Dark Type",
  icon: <img alt="Dark Type" src="/types/dark.png" width={64} height={64} />,
  test: (p: Pokemon) => isOfType(p, "Dark"),
};

export const SteelType: Category = {
  id: "SteelType",
  label: "Steel Type",
  icon: (
    <img alt="Steel Type" src="/types/steel.png" width={64} height={64} />
  ),
  test: (p: Pokemon) => isOfType(p, "Steel"),
};

export const FairyType: Category = {
  id: "FairyType",
  label: "Fairy Type",
  icon: (
    <img alt="Fairy Type" src="/types/fairy.png" width={64} height={64} />
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
