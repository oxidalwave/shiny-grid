export const dynamic = "force-dynamic";

import { use } from "react";
import { getPokedex } from "~/lib/data/pokemon";
import App from "~/components/App";
import { z } from "zod";

export default function SharedPage({
  params,
}: {
  params: { seed: string; username: string };
}) {
  const dex = use(getPokedex());

  const initialAnswers = use(
    fetch(`${process.env.URL}/api/${params.seed}/${params.username}`)
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

  return (
    <div className="p-2">
      <App dex={dex} seed={params.seed} initialAnswers={initialAnswers} />
    </div>
  );
}
