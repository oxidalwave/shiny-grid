import { use } from "react";
import App from "~/components/App";
import { prisma } from "~/server/db";

interface SeededPageProps {
  params: {
    seed: string;
  };
}

export default function HomePage({ params }: SeededPageProps) {
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

  return (
    <div className="p-2">
      <App dex={dex} seed={params.seed} />
    </div>
  );
}
