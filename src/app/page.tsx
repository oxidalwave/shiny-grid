export const revalidate = 21600;

import { use } from "react";
import { getServerSession } from "next-auth";
import App from "~/components/App";
import { authOptions } from "~/server/auth";
import { defaultSeed } from "~/lib/defaultSeed";
import Header from "~/components/Header";
import CategoryLabel from "~/components/CategoryLabel";
import getDex from "~/lib/getDex";
import { getInitialAnswers } from "~/lib/getInitialAnswers";
import { getCategories } from "~/lib/revisedCategories";

export default function HomePage() {
  const seed = defaultSeed();

  const dex = use(getDex());

  const session = use(getServerSession(authOptions));

  const initialAnswers = session
    ? use(getInitialAnswers(seed, session.user.name ?? ""))
    : [];

  const categoryIds = getCategories(seed);

  const categoryLabels = categoryIds.map((c) => (
    <CategoryLabel key={c} category={c} />
  ));

  return (
    <div className="p-2">
      <App
        categoryLabels={categoryLabels}
        header={<Header seed={seed} />}
        categoryIds={categoryIds}
        username={session?.user?.name ?? undefined}
        dex={dex}
        seed={seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
