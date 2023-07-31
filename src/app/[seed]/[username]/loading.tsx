import { use } from "react";
import App from "~/components/App";
import Grid from "~/components/Grid";
import type Category from "~/lib/categories";
import dex, { type Pokemon } from "~/lib/data/dex";
import { getCategories } from "~/lib/getCategories";

interface SeededPageProps {
  params: {
    seed: number;
    username: string;
  };
}

export default function UserAnswersPage({ params }: SeededPageProps) {
  const categories = getCategories(params.seed);

  const guesses = [];

  return (
    <div className="p-2">
      <App dex={dex} seed={params.seed} />
    </div>
  );
}
