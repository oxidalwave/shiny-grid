export const dynamic = "force-dynamic";

import { use } from "react";
import { PokemonValidator } from "~/lib/data/pokemon";
import App from "~/components/App";
import { z } from "zod";
import { env } from "~/env.mjs";
import { getCategories } from "~/lib/getCategories";

export default function SharedPage({
  params,
}: {
  params: { seed: string; username: string };
}) {
  const dex = use(
    fetch(`${env.URL}/api/pokemon`, { next: { revalidate: 3600 } })
      .then((r) => r.json())
      .then((j) => z.array(PokemonValidator).parse(j))
  );

  const initialAnswers = use(
    fetch(`${env.URL}/api/seeds/${params.seed}/users/${params.username}`)
      .then((r) => r.json())
      .then((j) =>
        z
          .array(
            z.object({
              pokemonId: z.string(),
              categoryIndex: z.number(),
            })
          )
          .parse(j)
      )
  );

  const categories = getCategories(params.seed);

  return (
    <div className="p-2">
      <App
        categories={categories}
        username={params.username}
        dex={dex}
        seed={params.seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
