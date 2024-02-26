import { type Pokemon } from "./data/dex";
import Image from "next/image";
import { type Seed } from "./getCategories";
import { type ReactNode, cache } from "react";
import gen from "random-seed";

interface Category {
  id: string;
  label: string;
  icon?: ReactNode;
  test: (pokemon: Pokemon) => boolean;
}
export default Category;

const isOfType = (p: Pokemon, t: string) =>
  p?.types?.map((t) => t.type.name)?.includes(t);

const totalStat = (p: Pokemon) =>
  p.hp + p.attack + p.defense + p.specialAttack + p.specialDefense + p.speed;

export const categories: Record<
  string,
  { label: ReactNode; icon?: ReactNode }
> = {
  WaterType: {
    label: "Water Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Water Type" src="/types/water.png" width={64} height={64} />
        <div>Water Type</div>
      </div>
    ),
  },
  NormalType: {
    label: "Normal Type",
    icon: (
      <div className="flex flex-col">
        <Image
          alt="Normal Type"
          src="/types/normal.png"
          width={64}
          height={64}
        />
        <div>Normal Type</div>
      </div>
    ),
  },
  FireType: {
    label: "Fire Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Fire Type" src="/types/fire.png" width={64} height={64} />
        <div>Fire Type</div>
      </div>
    ),
  },
  FightingType: {
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
  },
  FlyingType: {
    label: "Flying Type",
    icon: (
      <div className="flex flex-col">
        <Image
          alt="Flying Type"
          src="/types/flying.png"
          width={64}
          height={64}
        />
        <div>Flying Type</div>
      </div>
    ),
  },
  GrassType: {
    label: "Grass Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Grass Type" src="/types/grass.png" width={64} height={64} />
        <div>Grass Type</div>
      </div>
    ),
  },
  PoisonType: {
    label: "Poison Type",
    icon: (
      <div className="flex flex-col">
        <Image
          alt="Poison Type"
          src="/types/poison.png"
          width={64}
          height={64}
        />
        <div>Poison Type</div>
      </div>
    ),
  },
  ElectricType: {
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
  },
  GroundType: {
    label: "Ground Type",
    icon: (
      <div className="flex flex-col">
        <Image
          alt="Ground Type"
          src="/types/ground.png"
          width={64}
          height={64}
        />
        <div>Ground Type</div>
      </div>
    ),
  },
  PsychicType: {
    label: "Psychic Type",
    icon: (
      <div className="flex flex-col">
        <Image
          alt="Psychic Type"
          src="/types/psychic.png"
          width={64}
          height={64}
        />
        <div>Psychic Type</div>
      </div>
    ),
  },
  RockType: {
    label: "Rock Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Rock Type" src="/types/rock.png" width={64} height={64} />
        <div>Rock Type</div>
      </div>
    ),
  },
  IceType: {
    label: "Ice Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Ice Type" src="/types/ice.png" width={64} height={64} />
        <div>Ice Type</div>
      </div>
    ),
  },
  BugType: {
    label: "Bug Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Bug Type" src="/types/bug.png" width={64} height={64} />
        <div>Bug Type</div>
      </div>
    ),
  },
  DragonType: {
    label: "Dragon Type",
    icon: (
      <div className="flex flex-col">
        <Image
          alt="Dragon Type"
          src="/types/dragon.png"
          width={64}
          height={64}
        />
        <div>Dragon Type</div>
      </div>
    ),
  },
  GhostType: {
    label: "Ghost Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Ghost Type" src="/types/ghost.png" width={64} height={64} />
        <div>Ghost Type</div>
      </div>
    ),
  },
  DarkType: {
    label: "Dark Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Dark Type" src="/types/dark.png" width={64} height={64} />
        <div>Dark Type</div>
      </div>
    ),
  },
  SteelType: {
    label: "Steel Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Steel Type" src="/types/steel.png" width={64} height={64} />
        <div>Steel Type</div>
      </div>
    ),
  },
  FairyType: {
    label: "Fairy Type",
    icon: (
      <div className="flex flex-col">
        <Image alt="Fairy Type" src="/types/fairy.png" width={64} height={64} />
        <div>Fairy Type</div>
      </div>
    ),
  },
  LowHp: {
    label: "HP ≤ 70",
  },
  HighHp: {
    label: "HP ≥ 110",
  },
  LowAtk: {
    label: "Attack ≤ 70",
  },
  HighAtk: {
    label: "Attack ≥ 110",
  },
  LowDef: {
    label: "Defense ≤ 70",
  },
  HighDef: {
    label: "Defense ≥ 110",
  },
  LowSpA: {
    label: "Special Attack ≤ 70",
  },
  HighSpA: {
    label: "Special Attack ≥ 110",
  },
  LowSpD: {
    label: "Special Defense ≤ 70",
  },
  HighSpD: {
    label: "Special Defense ≥ 110",
  },
  LowSpe: {
    label: "Speed ≤ 70",
  },
  HighSpe: {
    label: "Speed ≥ 110",
  },
  LowTotal: {
    label: "Total ≤ 260",
  },
  HighTotal: {
    label: "Total ≥ 600",
  },
  Generation1: {
    label: "Generation 1",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image alt="red" src="/boxart/red.png" width={64} height={64} />
          <Image alt="blue" src="/boxart/blue.png" width={64} height={64} />
          <Image
            className="col-span-2 justify-self-center"
            alt="yellow"
            src="/boxart/yellow.png"
            width={64}
            height={64}
          />
        </div>
      </div>
    ),
  },
  Generation2: {
    label: "Generation 2",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image alt="gold" src="/boxart/gold.png" width={64} height={64} />
          <Image alt="silver" src="/boxart/silver.png" width={64} height={64} />
          <Image
            className="col-span-2 justify-self-center"
            alt="crystal"
            src="/boxart/crystal.png"
            width={64}
            height={64}
          />
        </div>
      </div>
    ),
  },
  Generation3: {
    label: "Generation 3",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image alt="ruby" src="/boxart/ruby.png" width={64} height={64} />
          <Image
            alt="sapphire"
            src="/boxart/sapphire.png"
            width={64}
            height={64}
          />
          <Image
            className="col-span-2 justify-self-center"
            alt="Emerald"
            src="/boxart/emerald.jpg"
            width={64}
            height={64}
          />
        </div>
      </div>
    ),
  },
  Generation4: {
    label: "Generation 4",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image
            alt="diamond"
            src="/boxart/diamond.jpg"
            width={64}
            height={64}
          />
          <Image alt="pearl" src="/boxart/pearl.jpg" width={64} height={64} />
          <Image
            className="col-span-2 justify-self-center"
            alt="platinum"
            src="/boxart/platinum.png"
            width={64}
            height={64}
          />
          {/*<Image
          className="col-span-3 justify-self-center"
          alt="heartgold"
          src="/boxart/heartgold.jpg"
          width={64}
          height={64}
        />
        <Image
          className="col-span-3 justify-self-center"
          alt="soulsilver"
          src="/boxart/soulsilver.jpg"
          width={64}
          height={64}
        />*/}
        </div>
      </div>
    ),
  },
  Generation5: {
    label: "Generation 5",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image alt="black" src="/boxart/black.png" width={64} height={64} />
          <Image alt="black2" src="/boxart/black2.png" width={64} height={64} />
          <Image alt="white" src="/boxart/white.png" width={64} height={64} />
          <Image alt="white2" src="/boxart/white2.png" width={64} height={64} />
        </div>
      </div>
    ),
  },
  Generation6: {
    label: "Generation 6",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image alt="x" src="/boxart/x.png" width={64} height={64} />
          <Image alt="y" src="/boxart/y.png" width={64} height={64} />
          {/*<Image
          alt="omegaruby"
          src="/boxart/omegaruby.png"
          width={64}
          height={64}
        />
        <Image
          alt="alphasapphire"
          src="/boxart/alphasapphire.png"
          width={64}
          height={64} />*/}
        </div>
      </div>
    ),
  },
  Generation7: {
    label: "Generation 7",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image alt="sun" src="/boxart/sun.png" width={64} height={64} />
          <Image
            alt="ultrasun"
            src="/boxart/ultrasun.png"
            width={64}
            height={64}
          />
          <Image alt="moon" src="/boxart/moon.png" width={64} height={64} />
          <Image
            alt="ultramoon"
            src="/boxart/ultramoon.png"
            width={64}
            height={64}
          />
        </div>
      </div>
    ),
  },
  Generation8: {
    label: "Generation 8",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image alt="sword" src="/boxart/sword.png" width={64} height={64} />
          <Image alt="shield" src="/boxart/shield.png" width={64} height={64} />
          <Image
            className="col-span-2 justify-self-center"
            alt="legendsarceus"
            src="/boxart/legendsarceus.png"
            width={64}
            height={64}
          />
          {/*<Image
          className="col-span-3 justify-self-center"
          alt="brilliantdiamond"
          src="/boxart/brilliantdiamond.png"
          width={64}
          height={64}
        />
        <Image
          className="col-span-3 justify-self-center"
          alt="shiningpearl"
          src="/boxart/shiningpearl.png"
          width={64}
          height={64} />*/}
        </div>
      </div>
    ),
  },
  Generation9: {
    label: "Generation 9",
    icon: (
      <div className="flex flex-col">
        <div className="text-center">Introduced in...</div>
        <div className="grid grid-cols-2">
          <Image
            alt="scarlet"
            src="/boxart/scarlet.png"
            width={64}
            height={64}
          />
          <Image alt="violet" src="/boxart/violet.png" width={64} height={64} />
        </div>
      </div>
    ),
  },
} as const;

export type CategoryId = keyof typeof categories;

export const tests: Record<CategoryId, (pokemon: Pokemon) => boolean> = {
  WaterType: (p) => isOfType(p, "Water"),
  NormalType: (p) => isOfType(p, "Normal"),
  FireType: (p) => isOfType(p, "Fire"),
  FightingType: (p) => isOfType(p, "Fighting"),
  FlyingType: (p) => isOfType(p, "Flying"),
  GrassType: (p) => isOfType(p, "Grass"),
  PoisonType: (p) => isOfType(p, "Poison"),
  ElectricType: (p) => isOfType(p, "Electric"),
  GroundType: (p) => isOfType(p, "Ground"),
  PsychicType: (p) => isOfType(p, "Psychic"),
  RockType: (p) => isOfType(p, "Rock"),
  IceType: (p) => isOfType(p, "Ice"),
  BugType: (p) => isOfType(p, "Bug"),
  DragonType: (p) => isOfType(p, "Dragon"),
  GhostType: (p) => isOfType(p, "Ghost"),
  DarkType: (p) => isOfType(p, "Dark"),
  SteelType: (p) => isOfType(p, "Steel"),
  FairyType: (p) => isOfType(p, "Fairy"),
  LowHp: (p) => p.hp <= 70,
  HighHp: (p) => p.hp >= 110,
  LowAtk: (p) => p.attack <= 70,
  HighAtk: (p) => p.attack >= 110,
  LowDef: (p) => p.defense <= 70,
  HighDef: (p) => p.defense >= 110,
  LowSpA: (p) => p.specialAttack <= 70,
  HighSpA: (p) => p.specialAttack >= 110,
  LowSpD: (p) => p.specialDefense <= 70,
  HighSpD: (p) => p.specialDefense >= 110,
  LowSpe: (p) => p.speed <= 70,
  HighSpe: (p) => p.speed >= 110,
  LowTotal: (p) => totalStat(p) <= 260,
  HighTotal: (p) => totalStat(p) >= 600,
  Generation1: (p) => p.generationIntroducedIn.name === 1,
  Generation2: (p) => p.generationIntroducedIn.name === 2,
  Generation3: (p) => p.generationIntroducedIn.name === 3,
  Generation4: (p) => p.generationIntroducedIn.name === 4,
  Generation5: (p) => p.generationIntroducedIn.name === 5,
  Generation6: (p) => p.generationIntroducedIn.name === 6,
  Generation7: (p) => p.generationIntroducedIn.name === 7,
  Generation8: (p) => p.generationIntroducedIn.name === 8,
  Generation9: (p) => p.generationIntroducedIn.name === 9,
};

const isInvalidType = (codes: CategoryId[]) =>
  (codes.includes("NormalType") && codes.includes("IceType")) ||
  (codes.includes("NormalType") && codes.includes("BugType")) ||
  (codes.includes("NormalType") && codes.includes("RockType")) ||
  (codes.includes("NormalType") && codes.includes("SteelType")) ||
  (codes.includes("FireType") && codes.includes("FairyType")) ||
  (codes.includes("IceType") && codes.includes("PoisonType")) ||
  (codes.includes("GroundType") && codes.includes("FairyType")) ||
  (codes.includes("BugType") && codes.includes("DragonType")) ||
  (codes.includes("RockType") && codes.includes("GhostType")) ||
  (codes.includes("DarkType") && codes.includes("Generation1")) ||
  (codes.includes("FireType") && codes.includes("HighHp")) ||
  (codes.includes("BugType") && codes.includes("HighHp")) ||
  (codes.includes("ElectricType") && codes.includes("HighSpD")) ||
  (codes.includes("GroundType") && codes.includes("FightingType"));

const isInvalidStat = (codes: CategoryId[]) =>
  (codes.includes("LowHp") && codes.includes("HighHp")) ||
  (codes.includes("LowAtk") && codes.includes("HighAtk")) ||
  (codes.includes("LowDef") && codes.includes("HighDef")) ||
  (codes.includes("LowSpA") && codes.includes("HighSpA")) ||
  (codes.includes("LowSpD") && codes.includes("HighSpD")) ||
  (codes.includes("LowSpe") && codes.includes("HighSpe")) ||
  (codes.includes("LowTotal") && codes.includes("HighTotal"));

// Check for invalid type combos
const isInvalidCombo = (codes: CategoryId[]) =>
  codes[0] === codes[1] ||
  isInvalidType(codes) ||
  isInvalidStat(codes) ||
  codes.every((c) => c.startsWith("Generation"));

const isInvalidGrid = (categories: CategoryId[]) =>
  new Set(categories).size !== categories.length ||
  [
    [categories[0]!, categories[3]!],
    [categories[0]!, categories[4]!],
    [categories[0]!, categories[5]!],
    [categories[1]!, categories[3]!],
    [categories[1]!, categories[4]!],
    [categories[1]!, categories[5]!],
    [categories[2]!, categories[3]!],
    [categories[2]!, categories[4]!],
    [categories[2]!, categories[5]!],
  ].some((c) => isInvalidCombo(c));

const hardcodedGrids: Record<Seed, CategoryId[]> = {
  "2024-03-30": [
    "WaterType",
    "LowAtk",
    "Generation2",
    "ElectricType",
    "LowDef",
    "HighHp",
  ],
};

export const getCategories: (seed: Seed) => CategoryId[] = cache((seed) => {
  const hardcoded = hardcodedGrids[seed];
  if (hardcoded !== undefined) {
    return hardcoded;
  }
  const rand = gen.create(seed);
  const catIds = Object.keys(categories);
  const cats = [...Array(6).keys()].map(() => catIds[rand(catIds.length)]!);

  return isInvalidGrid(cats) ? getCategories(`${seed}X`) : cats;
});
