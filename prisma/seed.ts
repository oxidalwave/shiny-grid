import dex from "./dex.json";
import forms from "./forms.json";
import mega from "./mega.json";
import regional from "./regional.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemonMegaAbility.deleteMany();
  await prisma.pokemonMegaType.deleteMany();
  await prisma.pokemonMega.deleteMany();

  await prisma.pokemonAlternateFormAbility.deleteMany();
  await prisma.pokemonAlternateFormEggGroup.deleteMany();
  await prisma.pokemonAlternateFormType.deleteMany();
  await prisma.pokemonAlternateForm.deleteMany();

  await prisma.pokemonRegionalFormAbility.deleteMany();
  await prisma.pokemonRegionalFormEggGroup.deleteMany();
  await prisma.pokemonRegionalFormType.deleteMany();
  await prisma.pokemonRegionalForm.deleteMany();

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
          imageUrl: p.imageUrl,

          forms: {
            create: forms
              .filter((f) => Math.floor(f.Nat) === p.Nat)
              .map((f) => ({
                hp: f.HP,
                name: f.Pokemon,
                attack: f.Atk,
                defense: f.Def,
                specialAttack: f.SpA,
                specialDefense: f.SpD,
                speed: f.Spe,
                types: {
                  create: f.types.map((t) => ({
                    type: {
                      connectOrCreate: {
                        where: { name: t },
                        create: { name: t, generationIntroduced: 1 },
                      },
                    },
                  })),
                },
                abilities: {
                  create: f.abilities.map((t) => ({
                    ability: {
                      connectOrCreate: {
                        where: { name: t },
                        create: { name: t },
                      },
                    },
                  })),
                },
                evWorth: f["EV Worth"],
                gender: f.Gender,
                evolve: f.Evolve,
              })),
          },

          regionalForms: {
            create: regional
              .filter((f) => f.Nat === p.Nat)
              .map((f) => ({
                hp: f.HP,
                name: f.Pokemon,
                attack: f.Atk,
                defense: f.Def,
                specialAttack: f.SpA,
                specialDefense: f.SpD,
                speed: f.Spe,
                types: {
                  create: f.types.map((t) => ({
                    type: {
                      connectOrCreate: {
                        where: { name: t },
                        create: { name: t, generationIntroduced: 1 },
                      },
                    },
                  })),
                },
                abilities: {
                  create: f.abilities.map((t) => ({
                    ability: {
                      connectOrCreate: {
                        where: { name: t },
                        create: { name: t },
                      },
                    },
                  })),
                },
                evWorth: f["EV Worth"],
                gender: f.Gender,
                evolve: f.Evolve,
              })),
          },

          megas: {
            create: mega
              .filter((f) => Math.floor(f.Nat) === p.Nat)
              .map((f) => ({
                hp: f.HP,
                name: f.Pokemon,
                attack: f.Atk,
                defense: f.Def,
                specialAttack: f.SpA,
                specialDefense: f.SpD,
                speed: f.Spe,
                types: {
                  create: f.types.map((t) => ({
                    type: {
                      connectOrCreate: {
                        where: { name: t },
                        create: { name: t, generationIntroduced: 1 },
                      },
                    },
                  })),
                },
                abilities: {
                  create: f.abilities.map((t) => ({
                    ability: {
                      connectOrCreate: {
                        where: { name: t },
                        create: { name: t },
                      },
                    },
                  })),
                },
              })),
          },

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
          forms: true,
          regionalForms: true,
          megas: true,
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
