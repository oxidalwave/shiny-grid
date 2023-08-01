import { use } from "react";
import { prisma } from "~/server/db";
import HomePageContent from "./content";

export default function HomePage({
  searchParams,
}: {
  searchParams: Record<string, never>;
}) {
  const pokemon = use(
    prisma.pokemon.findMany({
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
    })
  );

  const dex = pokemon.flatMap((p) => [
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

  return <HomePageContent dex={dex} />;
}
