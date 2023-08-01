export const dynamic = 'force-dynamic'

import { use } from "react";
import App from "~/components/App";
import { defaultSeed } from "~/lib/defaultSeed";
import { getPokedex } from "~/lib/data/pokemon";

export default function HomePage() {
  const dex = use(getPokedex());

  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={dex} seed={seed} />
    </div>
  );
}
