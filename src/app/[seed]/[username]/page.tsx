export const dynamic = "force-dynamic";

import { use } from "react";
import { PokemonValidator } from "~/lib/data/pokemon";
import App from "~/components/App";
import { z } from "zod";
import { env } from "~/env.mjs";

export default function SharedPage({
  params,
}: {
  params: { seed: string; username: string };
}) {
  const dex = use(
    fetch(`${env.URL}/api/pokemon`)
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

  const categoryIds = use(
    fetch(`${env.URL}/api/seeds/${params.seed}/categories`, {
      cache: "force-cache",
    })
      .then((r) => r.json())
      .then((j) => z.array(z.object({ id: z.string() })).parse(j))
  );

  return (
    <div className="p-2">
      <App
        categoryIds={categoryIds.map(({ id }) => id)}
        username={params.username}
        dex={dex}
        seed={params.seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
