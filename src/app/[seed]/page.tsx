import { getServerSession } from "next-auth";
import App from "~/components/App";
import { authOptions } from "~/server/auth";
import Header from "~/components/Header";
import getDex from "~/lib/getDex";
import { getInitialAnswers } from "~/lib/getInitialAnswers";
import { getCategories } from "~/lib/categories";

export default async function SeedPage({
  params,
}: {
  params: { seed: string };
}) {
  const [dex, session] = await Promise.allSettled([
    getDex(),
    getServerSession(authOptions),
  ]);

  if (dex.status === "fulfilled" && session.status === "fulfilled") {
    const seed = params.seed;

    const initialAnswers =
      session.status === "fulfilled"
        ? await getInitialAnswers(seed, session.value?.user.name ?? "")
        : [];

    const categoryIds = getCategories(seed);

    return (
      <div className="p-2">
        <App
          header={<Header seed={seed} />}
          categoryIds={categoryIds}
          username={session.value?.user?.name ?? undefined}
          dex={dex.value}
          seed={seed}
          initialAnswers={initialAnswers}
        />
      </div>
    );
  } else {
    return <div className="p-2" />;
  }
}
