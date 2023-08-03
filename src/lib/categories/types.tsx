import { type Pokemon } from "../data/dex";
import type Category from ".";
import Image from "next/image";

const isOfType = (p: Pokemon, t: string) =>
  p?.types?.map((t) => t.type.name)?.includes(t);

export const WaterType: Category = {
  id: "WaterType",
  label: "Water Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Water Type" src="/types/water.png" width={64} height={64} />
      <div>Water Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Water"),
};

export const NormalType: Category = {
  id: "NormalType",
  label: "Normal Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Normal Type" src="/types/normal.png" width={64} height={64} />
      <div>Normal Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Normal"),
};

export const FireType: Category = {
  id: "FireType",
  label: "Fire Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Fire Type" src="/types/fire.png" width={64} height={64} />
      <div>Fire Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Fire"),
};

export const FightingType: Category = {
  id: "FightingType",
  label: "Fighting Type",
  icon: (
    <div className="flex flex-col">
      <Image
        alt="Fighting Type"
        src="/types/fighting.png"
        width={64}
        height={64}
      />
      <div>Fighting Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Fighting"),
};

export const FlyingType: Category = {
  id: "FlyingType",
  label: "Flying Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Flying Type" src="/types/flying.png" width={64} height={64} />
      <div>Flying Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Flying"),
};

export const GrassType: Category = {
  id: "GrassType",
  label: "Grass Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Grass Type" src="/types/grass.png" width={64} height={64} />
      <div>Grass Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Grass"),
};

export const PoisonType: Category = {
  id: "PoisonType",
  label: "Poison Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Poison Type" src="/types/poison.png" width={64} height={64} />
      <div>Poison Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Poison"),
};

export const ElectricType: Category = {
  id: "ElectricType",
  label: "Electric Type",
  icon: (
    <div className="flex flex-col">
      <Image
        alt="Electric Type"
        src="/types/electric.png"
        width={64}
        height={64}
      />
      <div>Electric Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Electric"),
};

export const GroundType: Category = {
  id: "GroundType",
  label: "Ground Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Ground Type" src="/types/ground.png" width={64} height={64} />
      <div>Ground Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Ground"),
};

export const PsychicType: Category = {
  id: "PsychicType",
  label: "Psychic Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Psychic Type" src="/types/psychic.png" width={64} height={64} />
      <div>Psychic Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Psychic"),
};

export const RockType: Category = {
  id: "RockType",
  label: "Rock Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Rock Type" src="/types/rock.png" width={64} height={64} />
      <div>Rock Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Rock"),
};

export const IceType: Category = {
  id: "IceType",
  label: "Ice Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Ice Type" src="/types/ice.png" width={64} height={64} />
      <div>Ice Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Ice"),
};

export const BugType: Category = {
  id: "BugType",
  label: "Bug Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Bug Type" src="/types/bug.png" width={64} height={64} />
      <div>Bug Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Bug"),
};

export const DragonType: Category = {
  id: "DragonType",
  label: "Dragon Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Dragon Type" src="/types/dragon.png" width={64} height={64} />
      <div>Dragon Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Dragon"),
};

export const GhostType: Category = {
  id: "GhostType",
  label: "Ghost Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Ghost Type" src="/types/ghost.png" width={64} height={64} />
      <div>Ghost Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Ghost"),
};

export const DarkType: Category = {
  id: "DarkType",
  label: "Dark Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Dark Type" src="/types/dark.png" width={64} height={64} />
      <div>Dark Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Dark"),
};

export const SteelType: Category = {
  id: "SteelType",
  label: "Steel Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Steel Type" src="/types/steel.png" width={64} height={64} />
      <div>Steel Type</div>
    </div>
  ),
  test: (p: Pokemon) => isOfType(p, "Steel"),
};

export const FairyType: Category = {
  id: "FairyType",
  label: "Fairy Type",
  icon: (
    <div className="flex flex-col">
      <Image alt="Fairy Type" src="/types/fairy.png" width={64} height={64} />
      <div>Fairy Type</div>
    </div>
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
