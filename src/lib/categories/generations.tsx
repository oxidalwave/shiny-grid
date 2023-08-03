/* eslint-disable @next/next/no-img-element */
import type Category from ".";
import { type Pokemon } from "../data/dex";

export const Generation1: Category = {
  id: "Generation1",
  label: "Generation 1",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 1,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
        <img
          className=""
          alt="red"
          src="/boxart/red.png"
          width={64}
          height={64}
        />
        <img
          className=""
          alt="blue"
          src="/boxart/blue.png"
          width={64}
          height={64}
        />
        <img
          className="col-span-2 justify-self-center"
          alt="yellow"
          src="/boxart/yellow.png"
          width={64}
          height={64}
        />
      </div>
    </div>
  ),
};

export const Generation2: Category = {
  id: "Generation2",
  label: "Generation 2",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 2,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
        <img alt="gold" src="/boxart/gold.png" width={64} height={64} />
        <img alt="silver" src="/boxart/silver.png" width={64} height={64} />
        <img
          className="col-span-2 justify-self-center"
          alt="crystal"
          src="/boxart/crystal.png"
          width={64}
          height={64}
        />
      </div>
    </div>
  ),
};

export const Generation3: Category = {
  id: "Generation3",
  label: "Generation 3",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 3,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
        <img alt="ruby" src="/boxart/ruby.png" width={64} height={64} />
        <img alt="sapphire" src="/boxart/sapphire.png" width={64} height={64} />
        <img
          className="col-span-2 justify-self-center"
          alt="Emerald"
          src="/boxart/emerald.jpg"
          width={64}
          height={64}
        />
      </div>
    </div>
  ),
};

export const Generation4: Category = {
  id: "Generation4",
  label: "Generation 4",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 4,

  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-6">
        <img
          className="col-span-2"
          alt="diamond"
          src="/boxart/diamond.jpg"
          width={64}
          height={64}
        />
        <img
          className="col-span-2"
          alt="pearl"
          src="/boxart/pearl.jpg"
          width={64}
          height={64}
        />
        <img
          className="col-span-2"
          alt="platinum"
          src="/boxart/platinum.png"
          width={64}
          height={64}
        />
        <img
          className="col-span-3 justify-self-center"
          alt="heartgold"
          src="/boxart/heartgold.jpg"
          width={64}
          height={64}
        />
        <img
          className="col-span-3 justify-self-center"
          alt="soulsilver"
          src="/boxart/soulsilver.jpg"
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
  test: (p: Pokemon) => p.generationIntroducedIn.name === 5,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
        <img alt="black" src="/boxart/black.png" width={64} height={64} />
        <img alt="black2" src="/boxart/black2.png" width={64} height={64} />
        <img alt="white" src="/boxart/white.png" width={64} height={64} />
        <img alt="white2" src="/boxart/white2.png" width={64} height={64} />
      </div>
    </div>
  ),
};

export const Generation6: Category = {
  id: "Generation6",
  label: "Generation 6",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 6,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
        <img alt="x" src="/boxart/x.png" width={64} height={64} />
        <img alt="y" src="/boxart/y.png" width={64} height={64} />
        <img
          alt="omegaruby"
          src="/boxart/omegaruby.png"
          width={64}
          height={64}
        />
        <img
          alt="alphasapphire"
          src="/boxart/alphasapphire.png"
          width={64}
          height={64}
        />
      </div>
    </div>
  ),
};

export const Generation7: Category = {
  id: "Generation7",
  label: "Generation 7",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 7,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
        <img alt="sun" src="/boxart/sun.png" width={64} height={64} />
        <img alt="ultrasun" src="/boxart/ultrasun.png" width={64} height={64} />
        <img alt="moon" src="/boxart/moon.png" width={64} height={64} />
        <img
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
  test: (p: Pokemon) => p.generationIntroducedIn.name === 8,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-6">
        <img
          className="col-span-2"
          alt="sword"
          src="/boxart/sword.png"
          width={64}
          height={64}
        />
        <img
          className="col-span-2"
          alt="shield"
          src="/boxart/shield.png"
          width={64}
          height={64}
        />
        <img
          className="col-span-2"
          alt="legendsarceus"
          src="/boxart/legendsarceus.png"
          width={64}
          height={64}
        />
        <img
          className="col-span-3 justify-self-center"
          alt="brilliantdiamond"
          src="/boxart/brilliantdiamond.png"
          width={64}
          height={64}
        />
        <img
          className="col-span-3 justify-self-center"
          alt="shiningpearl"
          src="/boxart/shiningpearl.png"
          width={64}
          height={64}
        />
      </div>
    </div>
  ),
};

export const Generation9: Category = {
  id: "Generation9",
  label: "Generation 9",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 9,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
        <img alt="scarlet" src="/boxart/scarlet.png" width={64} height={64} />
        <img alt="violet" src="/boxart/violet.png" width={64} height={64} />
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
