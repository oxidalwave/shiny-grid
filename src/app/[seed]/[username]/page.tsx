import { use } from "react";
import App from "~/components/App";
import Header from "~/components/Header";
import CategoryLabel from "~/components/CategoryLabel";
import { getCategoryFromId } from "~/lib/categories";
import getDex from "~/lib/getDex";
import { getInitialAnswers } from "~/lib/getInitialAnswers";
import { getCategories } from "~/lib/getCategories";

export default function SharedPage({
  params,
}: {
  params: { seed: string; username: string };
}) {
  const dex = use(getDex());

  const initialAnswers = use(getInitialAnswers(params.seed, params.username));

  const categoryIds = getCategories(params.seed);

  const categoryLabels = categoryIds
    .map(getCategoryFromId)
    .map((c) => <CategoryLabel key={c.id} category={c} />);

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
