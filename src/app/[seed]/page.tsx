export const dynamic = "force-dynamic";

import { use } from "react";
import { getPokedex } from "~/lib/data/pokemon";
import { getServerSession } from "next-auth";
import App from "~/components/App";
import { z } from "zod";
import { authOptions } from "~/server/auth";

export default function SeedPage({ params }: { params: { seed: string } }) {
  const dex = use(getPokedex());

  const session = use(getServerSession(authOptions));

  const initialAnswers = session
    ? use(
        fetch(`${process.env.URL}/api/${params.seed}/${session.user.name}`)
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
      <App
        username={session?.user?.name ?? undefined}
        dex={dex}
        seed={params.seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
