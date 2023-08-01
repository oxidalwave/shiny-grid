import App from "~/components/App";
import { getCategories } from "~/lib/getCategories";

interface SeededPageProps {
  params: {
    seed: string;
    username: string;
  };
}

export default function UserAnswersPage({ params }: SeededPageProps) {
  const categories = getCategories(params.seed);

  const guesses = [];

  return (
    <div className="p-2">
      <App dex={[]} seed={params.seed} />
    </div>
  );
}
