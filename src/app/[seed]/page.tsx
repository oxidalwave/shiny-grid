import { getServerSession } from "next-auth";
import App from "~/components/App";
import { authOptions } from "~/server/auth";
import Header from "~/components/Header";
import getDex from "~/lib/getDex";
import { getAnswers } from "~/lib/getAnswers";
import { getCategories } from "~/lib/categories";
import { redirect } from "next/navigation";

export default async function SeedPage({
  params,
}: {
  params: Promise<{ seed: string }>;
}) {
  const { seed } = await params;

  const session = await getServerSession(authOptions);

  if (session !== null) {
    redirect(`/${seed}/${session.user.name}`);
  }

  const dex = await getDex();

  const initialAnswers = await getAnswers(seed, "");

  const categoryIds = getCategories(seed);

  return (
    <div className="p-2">
      <App
        header={<Header seed={seed} />}
        categoryIds={categoryIds}
        username={undefined}
        dex={dex}
        seed={seed}
        initialAnswers={initialAnswers}
      />
    </div>
  );
}
