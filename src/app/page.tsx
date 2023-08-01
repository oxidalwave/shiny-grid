export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { use } from "react";
import { prisma } from "~/server/db";
import App from "~/components/App";

export default function HomePage() {
  function defaultSeed() {
    const date = new Date();
    return new Date(
      `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    ).getTime().toString();
  }

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

  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={dex} seed={seed} />
    </div>
  );
}
