export const dynamic = 'force-dynamic'

import App from "~/components/App";
import { defaultSeed } from "~/lib/defaultSeed";

export default function HomePageLoading() {
  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={[]} seed={seed} />
    </div>
  );
}
