import { use } from "react";
import { getServerSession } from "next-auth";
import App from "~/components/App";
import { z } from "zod";
import { authOptions } from "~/server/auth";
import { env } from "~/env.mjs";
import { PokemonValidator } from "~/lib/data/pokemon";
import Header from "~/components/Header";
import { getCategoryFromId } from "~/lib/categories";
import CategoryLabel from "~/components/CategoryLabel";

export default function SeedPage({ params }: { params: { seed: string } }) {
  const dex = use(
    fetch(`${env.NEXT_PUBLIC_API_URL}/api/pokemon`)
      .then((r) => r.json())
      .then((j) => z.array(PokemonValidator).parse(j)),
  );

  const session = use(getServerSession(authOptions));

  const initialAnswers = session
    ? use(
        fetch(
          `${env.NEXT_PUBLIC_API_URL}/api/grids/${params.seed}/users/${session.user.name}`,
          { cache: "no-cache" },
        )
          .then((r) => r.json())
          .then((j) =>
            z
              .array(
                z.object({
                  pokemonId: z.string(),
                  categoryIndex: z.number(),
                }),
              )
              .parse(j),
          ),
      )
    : [];

  const categoryIds = use(
    fetch(`${env.NEXT_PUBLIC_API_URL}/api/grids/${params.seed}/categories`)
      .then((r) => r.json())
      .then((j) =>
        z
          .array(
            z.object({
              id: z.string(),
              kind: z.union([
                z.literal("EGGGROUP"),
                z.literal("TYPE"),
                z.literal("GEN"),
                z.literal("STAT"),
              ]),
            }),
          )
          .parse(j),
      ),
  );
  const categoryLabels = categoryIds
    .map(getCategoryFromId)
    .map((c) => <CategoryLabel key={c.id} category={c} />);

  return (
    <div className="p-2">
      <App
        categoryLabels={categoryLabels}
        header={<Header seed={params.seed} />}
        categoryIds={categoryIds}
        username={session?.user?.name ?? undefined}
        dex={dex}
        seed={params.seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
