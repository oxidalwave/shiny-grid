import dex from "./dex.json";
import forms from "./forms.json";
import mega from "./mega.json";
import regional from "./regional.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: [] });

async function main() {
  await prisma.userAnswer.deleteMany();

  await prisma.pokemonAbility.deleteMany();
  await prisma.pokemonType.deleteMany();
  await prisma.pokemonEggGroup.deleteMany();
  await prisma.pokemon.deleteMany();

  await prisma.type.deleteMany();
  await prisma.ability.deleteMany();
  await prisma.eggGroup.deleteMany();

  await prisma.type.createMany({
    data: [
      { name: "Normal", generationIntroduced: 1 },
      { name: "Fire", generationIntroduced: 1 },
      { name: "Fighting", generationIntroduced: 1 },
      { name: "Water", generationIntroduced: 1 },
      { name: "Flying", generationIntroduced: 1 },
      { name: "Grass", generationIntroduced: 1 },
      { name: "Poison", generationIntroduced: 1 },
      { name: "Electric", generationIntroduced: 1 },
      { name: "Ground", generationIntroduced: 1 },
      { name: "Psychic", generationIntroduced: 1 },
      { name: "Rock", generationIntroduced: 1 },
      { name: "Ice", generationIntroduced: 1 },
      { name: "Bug", generationIntroduced: 1 },
      { name: "Dragon", generationIntroduced: 1 },
      { name: "Ghost", generationIntroduced: 1 },
      { name: "Dark", generationIntroduced: 2 },
      { name: "Steel", generationIntroduced: 2 },
      { name: "Fairy", generationIntroduced: 6 },
      { name: "???", generationIntroduced: 1 },
    ],
  });

  await prisma.ability.createMany({
    data: dex
      .flatMap((p) => p.abilities)
      .filter((value, index, array) => array.indexOf(value) === index)
      .map((name) => ({ name })),
    skipDuplicates: true,
  });

  await prisma.eggGroup.createMany({
    data: dex
      .flatMap((p) => p.eggGroups)
      .filter((value, index, array) => array.indexOf(value) === index)
      .map((name) => ({ name })),
    skipDuplicates: true,
  });

  for (const p of dex) {
    await prisma.pokemon
      .create({
        data: {
          kind: "POKEMON",
          nationalDexId: p.Nat,
          name: p.Pokemon,
          hp: p.HP,
          attack: p.Atk,
          defense: p.Def,
          specialAttack: p.SpA,
          specialDefense: p.SpD,
          speed: p.Spe,

          evWorth: p["EV Worth"],
          gender: p.Gender,
          evolve: p.Evolve,
          catchRate: p.Catch,
          imageUrl: `/sprites/${("000" + p.Nat).slice(-4)}.png`,

          types: {
            create: p.types.map((t) => ({
              type: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t, generationIntroduced: 1 },
                },
              },
            })),
          },

          abilities: {
            create: p.abilities.map((t) => ({
              ability: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t },
                },
              },
            })),
          },

          eggGroups: {
            create: p.eggGroups.map((t) => ({
              eggGroup: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t },
                },
              },
            })),
          },
        },

        include: {
          types: true,
          abilities: true,
          eggGroups: true,
        },
      })
      .then(({ id }) => console.log(id));
  }

  for (const p of mega) {
    const main = dex.find((d) => d.Nat === p.Nat);

    await prisma.pokemon
      .create({
        data: {
          kind: "MEGA",
          nationalDexId: p.Nat,
          name: p.Pokemon,
          hp: p.HP,
          attack: p.Atk,
          defense: p.Def,
          specialAttack: p.SpA,
          specialDefense: p.SpD,
          speed: p.Spe,

          evWorth: main?.["EV Worth"],
          gender: main?.Gender,
          evolve: main?.Evolve,
          catchRate: main?.Catch,

          imageUrl: `/sprites/${("000" + p.Nat).slice(-4)}_01.png`,

          types: {
            create: p.types.map((t) => ({
              type: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t, generationIntroduced: 1 },
                },
              },
            })),
          },

          abilities: {
            create: p.abilities.map((t) => ({
              ability: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t },
                },
              },
            })),
          },
        },

        include: {
          types: true,
          abilities: true,
        },
      })
      .then(({ id }) => console.log(id));
  }

  for (const p of regional) {
    const main = dex.find((d) => d.Nat === p.Nat);

    await prisma.pokemon
      .create({
        data: {
          kind: "REGIONAL",
          nationalDexId: p.Nat,
          name: p.Pokemon,
          hp: p.HP,
          attack: p.Atk,
          defense: p.Def,
          specialAttack: p.SpA,
          specialDefense: p.SpD,
          speed: p.Spe,

          evWorth: p["EV Worth"],
          gender: p.Gender,
          evolve: p.Evolve,
          catchRate: main?.Catch,
          imageUrl: `/sprites/${("000" + p.Nat).slice(-4)}_01.png`,

          types: {
            create: p.types.map((t) => ({
              type: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t, generationIntroduced: 1 },
                },
              },
            })),
          },

          abilities: {
            create: p.abilities.map((t) => ({
              ability: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t },
                },
              },
            })),
          },

          eggGroups: main
            ? {
                create: main.eggGroups.map((t) => ({
                  eggGroup: {
                    connectOrCreate: {
                      where: { name: t },
                      create: { name: t },
                    },
                  },
                })),
              }
            : undefined,
        },

        include: {
          types: true,
          abilities: true,
          eggGroups: true,
        },
      })
      .then(({ id }) => console.log(id));
  }

  for (const p of forms) {
    const main = dex.find((d) => d.Nat === p.Nat);

    await prisma.pokemon
      .create({
        data: {
          kind: "ALTERNATE",
          nationalDexId: p.Nat,
          name: p.Pokemon,
          hp: p.HP,
          attack: p.Atk,
          defense: p.Def,
          specialAttack: p.SpA,
          specialDefense: p.SpD,
          speed: p.Spe,

          evWorth: p["EV Worth"],
          gender: p.Gender,
          evolve: p.Evolve,
          catchRate: main?.Catch,
          imageUrl: `/sprites/${("000" + p.Nat).slice(-4)}_01.png`,

          types: {
            create: p.types.map((t) => ({
              type: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t, generationIntroduced: 1 },
                },
              },
            })),
          },

          abilities: {
            create: p.abilities.map((t) => ({
              ability: {
                connectOrCreate: {
                  where: { name: t },
                  create: { name: t },
                },
              },
            })),
          },

          eggGroups: main
            ? {
                create: main.eggGroups.map((t) => ({
                  eggGroup: {
                    connectOrCreate: {
                      where: { name: t },
                      create: { name: t },
                    },
                  },
                })),
              }
            : undefined,
        },

        include: {
          types: true,
          abilities: true,
          eggGroups: true,
        },
      })
      .then(({ id }) => console.log(id));
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
