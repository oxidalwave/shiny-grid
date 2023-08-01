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
  const dex = use(
    prisma.pokemon.findMany({
      include: {
        types: {
          include: {
            type: true,
          },
        },
      },
    })
  );

  console.log(dex);

  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={dex} seed={seed} />
    </div>
  );
}
