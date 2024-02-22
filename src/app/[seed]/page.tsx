import { use } from "react";
import { getServerSession } from "next-auth";
import App from "~/components/App";
import { authOptions } from "~/server/auth";
import Header from "~/components/Header";
import CategoryLabel from "~/components/CategoryLabel";
import { getInitialAnswers } from "~/lib/getInitialAnswers";
import getDex from "~/lib/getDex";
import { getCategories } from "~/lib/revisedCategories";

export default function SeedPage({ params }: { params: { seed: string } }) {
  const dex = use(getDex());

  const session = use(getServerSession(authOptions));

  const initialAnswers = session
    ? use(getInitialAnswers(params.seed, session.user.name ?? ""))
    : [];

  const categoryIds = getCategories(params.seed);

  const categoryLabels = categoryIds.map((c) => (
    <CategoryLabel key={c} category={c} />
  ));

  return (
    <div className="p-2">
      <App
        categoryLabels={categoryLabels}
        header={<Header seed={params.seed} />}
        categoryIds={categoryIds}
        username={session?.user?.name ?? undefined}
        dex={dex}
        seed={params.seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
