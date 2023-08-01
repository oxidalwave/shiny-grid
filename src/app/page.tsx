export const dynamic = "force-dynamic";

import { use } from "react";
import { getPokedex } from "~/lib/data/pokemon";
import { getServerSession } from "next-auth";
import App from "~/components/App";
import { defaultSeed } from "~/lib/defaultSeed";
import { z } from "zod";
import { authOptions } from "~/server/auth";

export default function HomePage() {
  const seed = defaultSeed();

  const dex = use(getPokedex());

  const session = use(getServerSession(authOptions));

  const initialAnswers = session
    ? use(
        fetch(`${process.env.URL}/api/${seed}/${session.user.name}`)
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

  return (
    <div className="p-2">
      <App username={session?.user?.name ?? undefined} dex={dex} seed={seed} initialAnswers={initialAnswers} />
    </div>
  );
}
