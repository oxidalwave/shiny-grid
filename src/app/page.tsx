import { use } from "react";
import { getServerSession } from "next-auth";
import App from "~/components/App";
import { z } from "zod";
import { authOptions } from "~/server/auth";
import { env } from "~/env.mjs";
import { PokemonValidator } from "~/lib/data/pokemon";
import { defaultSeed } from "~/lib/defaultSeed";

export default function HomePage() {
  const seed = defaultSeed();

  const dex = use(
    fetch(`${env.URL}/api/pokemon`)
      .then((r) => r.json())
      .then((j) => z.array(PokemonValidator).parse(j))
  );

  const session = use(getServerSession(authOptions));

  const initialAnswers = session
    ? use(
        fetch(`${env.URL}/api/seeds/${seed}/users/${session.user.name}`, {
          cache: "no-cache",
        })
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

  const categoryIds = use(
    fetch(`${env.URL}/api/seeds/${seed}/categories`)
      .then((r) => r.json())
      .then((j) => z.array(z.object({ id: z.string() })).parse(j))
  );

  return (
    <div className="p-2">
      <App
        categoryIds={categoryIds.map(({ id }) => id)}
        username={session?.user?.name ?? undefined}
        dex={dex}
        seed={seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
