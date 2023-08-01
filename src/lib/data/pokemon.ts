import { prisma } from "~/server/db";

export async function getPokedex() {
  const pokemon = await prisma.pokemon.findMany({
    include: {
      types: {
        include: {
          type: true,
        },
      },
      abilities: {
        include: {
          ability: true,
        },
      },
      forms: {
        include: {
          types: {
            include: {
              type: true,
            },
          },
          abilities: {
            include: {
              ability: true,
            },
          },
        },
      },
      regionalForms: {
        include: {
          types: {
            include: {
              type: true,
            },
          },
          abilities: {
            include: {
              ability: true,
            },
          },
        },
      },
      megas: {
        include: {
          types: {
            include: {
              type: true,
            },
          },
          abilities: {
            include: {
              ability: true,
            },
          },
        },
      },
    },
  });

  return pokemon.flatMap((p) => [
    p,
    ...p.forms.map((f, i) => ({
      ...f,
      nationalDexId: p.nationalDexId + i / 1000,
    })),
    ...p.megas.map((f, i) => ({
      ...f,
      nationalDexId: p.nationalDexId + i / 2000,
    })),
    ...p.regionalForms.map((f, i) => ({
      ...f,
      nationalDexId: p.nationalDexId + i / 3000,
    })),
  ]);
}
