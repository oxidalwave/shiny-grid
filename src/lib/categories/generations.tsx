import Image from "next/image";
import type Category from ".";
import { type Pokemon } from "../data/dex";

export const Generation1: Category = {
  id: "Generation1",
  label: "Generation 1",
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
        <Image
          className=""
          alt="red"
          src="/boxart/red.png"
          width={64}
          height={64}
        />
        <Image
          className=""
          alt="blue"
          src="/boxart/blue.png"
          width={64}
          height={64}
        />
        <Image
          className=""
          alt="yellow"
          src="/boxart/yellow.png"
          width={64}
          height={64}
        />
      </div>
    </div>
  ),
  test: (p: Pokemon) => p.nationalDexId >= 1 && p.nationalDexId < 152,
};

export const Generation2: Category = {
  id: "Generation2",
  label: "Generation 2",
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
        <Image alt="gold" src="/boxart/gold.png" width={64} height={64} />
        <Image alt="silver" src="/boxart/silver.png" width={64} height={64} />
        <Image alt="crystal" src="/boxart/crystal.png" width={64} height={64} />
      </div>
    </div>
  ),
  test: (p: Pokemon) => p.nationalDexId >= 152 && p.nationalDexId <= 251,
};

export const Generation3: Category = {
  id: "Generation3",
  label: "Generation 3",
  test: (p: Pokemon) => p.nationalDexId >= 252 && p.nationalDexId < 387,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
        <Image alt="ruby" src="/boxart/ruby.png" width={64} height={64} />
        <Image
          alt="sapphire"
          src="/boxart/sapphire.png"
          width={64}
          height={64}
        />
        <Image alt="crystal" src="/boxart/emerald.png" width={64} height={64} />
      </div>
    </div>
  ),
};

export const Generation4: Category = {
  id: "Generation4",
  label: "Generation 4",
  test: (p: Pokemon) => p.nationalDexId >= 387 && p.nationalDexId < 494,

  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
        <Image alt="diamond" src="/boxart/diamond.png" width={64} height={64} />
        <Image alt="pearl" src="/boxart/pearl.png" width={64} height={64} />
        <Image
          alt="platinum"
          src="/boxart/platinum.png"
          width={64}
          height={64}
        />
      </div>
    </div>
  ),
};

export const Generation5: Category = {
  id: "Generation5",
  label: "Generation 5",
  test: (p: Pokemon) => p.nationalDexId >= 494 && p.nationalDexId < 650,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
        <Image alt="black" src="/boxart/black.png" width={64} height={64} />
        <Image alt="black2" src="/boxart/black2.png" width={64} height={64} />
        <Image alt="white" src="/boxart/white.png" width={64} height={64} />
        <Image alt="white2" src="/boxart/white2.png" width={64} height={64} />
      </div>
    </div>
  ),
};

export const Generation6: Category = {
  id: "Generation6",
  label: "Generation 6",
  test: (p: Pokemon) => p.nationalDexId >= 650 && p.nationalDexId < 722,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
        <Image alt="x" src="/boxart/x.png" width={64} height={64} />
        <Image alt="y" src="/boxart/y.png" width={64} height={64} />
      </div>
    </div>
  ),
};

export const Generation7: Category = {
  id: "Generation7",
  label: "Generation 7",
  test: (p: Pokemon) => p.nationalDexId >= 722 && p.nationalDexId < 810,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
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
};

export const Generation8: Category = {
  id: "Generation8",
  label: "Generation 8",
  test: (p: Pokemon) => p.nationalDexId >= 810 && p.nationalDexId < 906,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
        <Image alt="sword" src="/boxart/sword.png" width={64} height={64} />
        <Image alt="shield" src="/boxart/shield.png" width={64} height={64} />
      </div>
    </div>
  ),
};

export const Generation9: Category = {
  id: "Generation9",
  label: "Generation 9",
  test: (p: Pokemon) => p.nationalDexId >= 906 && p.nationalDexId < 1011,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="flex justify-center">
        <Image alt="scarlet" src="/boxart/scarlet.png" width={64} height={64} />
        <Image alt="violet" src="/boxart/violet.png" width={64} height={64} />
      </div>
    </div>
  ),
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
  Generation9,
];
