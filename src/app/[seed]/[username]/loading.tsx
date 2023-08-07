import App from "~/components/App";
import { type Pokemon } from "~/lib/data/dex";
import { getCategories } from "~/lib/getCategories";
import Spinner from "~/components/common/Spinner";
import { getCategoryFromId } from "~/lib/categories";
import CategoryLabel from "~/components/CategoryLabel";
import Header from "~/components/Header";

export default function SeedPageLoading({
  params,
}: {
  params: { seed: string; username: string };
}) {
  const seed = params.seed;

  const dex = [] as Pokemon[];

  const initialAnswers = [] as {
    categoryIndex: number;
    pokemonId: string;
  }[];

  const categoryIds = getCategories(seed);
  
  const categoryLabels = categoryIds
    .map(getCategoryFromId)
    .map((c) => <CategoryLabel key={c.id} category={c} />);

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-slate-700 bg-opacity-50 z-10">
        <Spinner />
      </div>
      <div className="p-2">
        <App
          categoryLabels={categoryLabels}
          header={<Header seed={seed} />}
          loading
          categoryIds={categoryIds}
          username={params.username}
          dex={dex}
          seed={seed}
          initialAnswers={initialAnswers}
        />
      </div>
    </>
  );
}
