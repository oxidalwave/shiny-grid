import { use } from "react";
import { getServerSession } from "next-auth";
import App from "~/components/App";
import { authOptions } from "~/server/auth";
import { defaultSeed } from "~/lib/defaultSeed";
import { type Pokemon } from "~/lib/data/dex";

export default function HomePageLoading() {
  const seed = defaultSeed();

  const dex = [] as Pokemon[];

  const session = use(getServerSession(authOptions));

  const initialAnswers = [] as {
    categoryIndex: number;
    pokemonId: string;
  }[];

  const categoryIds = [] as {
    kind: "TYPE" | "GEN" | "STAT" | "EGGGROUP";
    id: string;
  }[];

  return (
    <div className="p-2">
      <App
        loading
        categoryIds={categoryIds}
        username={session?.user?.name ?? undefined}
        dex={dex}
        seed={seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
