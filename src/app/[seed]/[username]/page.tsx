import App from "~/components/App";
import type Category from "~/lib/categories";
import { type Pokemon } from "~/lib/data/dex";
import { getCategories } from "~/lib/getCategories";
import { use } from "react";
import { prisma } from "~/server/db";

interface SeededPageProps {
  params: {
    seed: number;
    username: string;
  };
}

export default function UserAnswersPage({ params }: SeededPageProps) {
  const dex = use(
    prisma.pokemon.findMany({
      include: {
        types: {
          include: {
            type: {
              select: {
                name: true,
                generationIntroduced: true,
              },
            },
          },
        },
        abilities: {
          include: {
            ability: {
              select: {
                name: true,
              },
            },
          },
        },
        forms: true,
        regionalForms: true,
        megas: true,
      },
    })
  );
  const categories = getCategories(params.seed);

  const guesses = use(
    Promise.resolve([]) as Promise<
      {
        pokemon: Pokemon;
        categories: Category[];
      }[]
    >
  );

  return (
    <div className="p-2">
      <App dex={dex} seed={params.seed} />
    </div>
  );
}
