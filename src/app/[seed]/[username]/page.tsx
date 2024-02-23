import { use } from "react";
import App from "~/components/App";
import Header from "~/components/Header";
import CategoryLabel from "~/components/CategoryLabel";
import getDex from "~/lib/getDex";
import { getInitialAnswers } from "~/lib/getInitialAnswers";
import { getCategories } from "~/lib/revisedCategories";

export default function SharedPage({
  params,
}: {
  params: { seed: string; username: string };
}) {
  const dex = use(getDex());

  const initialAnswers = use(getInitialAnswers(params.seed, params.username));

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
        username={params.username}
        dex={dex}
        seed={params.seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
