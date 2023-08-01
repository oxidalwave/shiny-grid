export const dynamic = "force-dynamic";

import { defaultSeed } from "~/lib/defaultSeed";
import App from "~/components/App";

export default function HomePageLoading() {
  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={[]} seed={seed} initialAnswers={[]} />
    </div>
  );
}
