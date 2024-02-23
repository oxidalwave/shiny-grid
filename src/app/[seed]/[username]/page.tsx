import App from "~/components/App";
import Header from "~/components/Header";
import getDex from "~/lib/getDex";
import { getInitialAnswers } from "~/lib/getInitialAnswers";
import { getCategories } from "~/lib/categories";

export default async function SharedPage({
  params,
}: {
  params: { seed: string; username: string };
}) {
  const { seed, username } = params;

  const [dex, initialAnswers] = await Promise.allSettled([
    getDex(),
    getInitialAnswers(seed, username),
  ]);

  if (dex.status === "fulfilled" && initialAnswers.status === "fulfilled") {
    const categoryIds = getCategories(seed);

    return (
      <div className="p-2">
        <App
          header={<Header seed={seed} />}
          categoryIds={categoryIds}
          username={params.username}
          dex={dex.value}
          seed={seed}
          initialAnswers={initialAnswers.value}
        />
      </div>
    );
  } else {
    return <div className="p-2" />;
  }
}
