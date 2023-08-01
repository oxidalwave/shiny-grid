import { use } from "react";
import App from "~/components/App";
import { prisma } from "~/server/db";

function defaultSeed() {
  const date = new Date();
  return new Date(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  ).getTime();
}

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
      nationalDexId: p.nationalDexId + i / 100,
    })),
    ...p.megas.map((f, i) => ({
      ...f,
      nationalDexId: p.nationalDexId + i / 100,
    })),
    ...p.regionalForms.map((f, i) => ({
      ...f,
      nationalDexId: p.nationalDexId + i / 100,
    })),
  ]);

  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={dex} seed={seed} />
    </div>
  );
}
