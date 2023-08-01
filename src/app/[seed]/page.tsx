import { use } from "react";
import { prisma } from "~/server/db";
import SeedPageContent from "./content";

interface SeedPageProps {
  params: {
    seed: string;
  };
}

export default function SeedPage({ params }: SeedPageProps) {
  const dex = use(
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
        forms: true,
        regionalForms: true,
        megas: true,
      },
    })
  );

  return <SeedPageContent dex={dex} seed={params.seed} />;
}
