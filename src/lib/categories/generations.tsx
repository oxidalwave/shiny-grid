import Image from "next/image";
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
};

export const Generation2: Category = {
  id: "Generation2",
  label: "Generation 2",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 2,
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
};

export const Generation3: Category = {
  id: "Generation3",
  label: "Generation 3",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 3,
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
};

export const Generation4: Category = {
  id: "Generation4",
  label: "Generation 4",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 4,

  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
        <Image
          className="col-span-1"
          alt="diamond"
          src="/boxart/diamond.jpg"
          width={64}
          height={64}
        />
        <Image
          className="col-span-1"
          alt="pearl"
          src="/boxart/pearl.jpg"
          width={64}
          height={64}
        />
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
};

export const Generation5: Category = {
  id: "Generation5",
  label: "Generation 5",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 5,
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
};

export const Generation6: Category = {
  id: "Generation6",
  label: "Generation 6",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 6,
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
};

export const Generation7: Category = {
  id: "Generation7",
  label: "Generation 7",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 7,
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
};

export const Generation8: Category = {
  id: "Generation8",
  label: "Generation 8",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 8,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-6">
        <Image
          className="col-span-2"
          alt="sword"
          src="/boxart/sword.png"
          width={64}
          height={64}
        />
        <Image
          className="col-span-2"
          alt="shield"
          src="/boxart/shield.png"
          width={64}
          height={64}
        />
        <Image
          className="col-span-2"
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
};

export const Generation9: Category = {
  id: "Generation9",
  label: "Generation 9",
  test: (p: Pokemon) => p.generationIntroducedIn.name === 9,
  icon: (
    <div className="flex flex-col">
      <div className="text-center">Introduced in...</div>
      <div className="grid grid-cols-2">
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
