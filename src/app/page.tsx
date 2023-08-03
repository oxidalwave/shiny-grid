export const revalidate = 21600;

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
    fetch(`${env.NEXT_PUBLIC_API_URL}/api/pokemon`, {
      next: { revalidate: 21600 },
    })
      .then((r) => r.json())
      .then((j) => z.array(PokemonValidator).parse(j)),
  );

  const session = use(getServerSession(authOptions));

  const initialAnswers = session
    ? use(
        fetch(`${env.NEXT_PUBLIC_API_URL}/api/grids/${seed}/users/${session.user.name}`, {
          cache: "no-cache",
        })
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
    fetch(`${env.NEXT_PUBLIC_API_URL}/api/grids/${seed}/categories`, {
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

  return (
    <div className="p-2">
      <App
        categoryIds={categoryIds}
        username={session?.user?.name ?? undefined}
        dex={dex}
        seed={seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
