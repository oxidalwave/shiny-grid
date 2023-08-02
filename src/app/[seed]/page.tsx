export const dynamic = "force-dynamic";

import { use } from "react";
import { getServerSession } from "next-auth";
import App from "~/components/App";
import { z } from "zod";
import { authOptions } from "~/server/auth";
import { env } from "~/env.mjs";
import { PokemonValidator } from "~/lib/data/pokemon";
import { getCategories } from "~/lib/getCategories";
import { getCategoryFromId } from "~/lib/categories";

export default function SeedPage({ params }: { params: { seed: string } }) {
  const dex = use(
    fetch(`${env.URL}/api/pokemon`)
      .then((r) => r.json())
      .then((j) => z.array(PokemonValidator).parse(j))
  );

  const session = use(getServerSession(authOptions));

  const initialAnswers = session
    ? use(
        fetch(`${env.URL}/api/seeds/${params.seed}/users/${session.user.name}`)
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
      )
    : [];

  const categories = use(
    fetch(`${env.URL}/api/seeds/${params.seed}/categories`)
      .then((r) => r.json())
      .then((j) => z.array(z.string()).parse(j))
  );

  return (
    <div className="p-2">
      <App
        categoryIds={categories}
        username={session?.user?.name ?? undefined}
        dex={dex}
        seed={params.seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
