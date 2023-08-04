export const dynamic = "force-dynamic";

import { use } from "react";
import { PokemonValidator } from "~/lib/data/pokemon";
import App from "~/components/App";
import { z } from "zod";
import { env } from "~/env.mjs";
import Header from "~/components/Header";
import CategoryLabel from "~/components/CategoryLabel";
import { getCategoryFromId } from "~/lib/categories";

export default function SharedPage({
  params,
}: {
  params: { seed: string; username: string };
}) {
  const dex = use(
    fetch(`${env.NEXT_PUBLIC_API_URL}/api/pokemon`, {
      next: { revalidate: 21600 },
    })
      .then((r) => r.json())
      .then((j) => z.array(PokemonValidator).parse(j)),
  );

  const initialAnswers = use(
    fetch(
      `${env.NEXT_PUBLIC_API_URL}/api/grids/${params.seed}/users/${params.username}`,
      {
        cache: "no-cache",
      },
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
  );

  const categoryIds = use(
    fetch(`${env.NEXT_PUBLIC_API_URL}/api/grids/${params.seed}/categories`, {
      next: { revalidate: 7200 },
    })
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
        username={params.username}
        dex={dex}
        seed={params.seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
