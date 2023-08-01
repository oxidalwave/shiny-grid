export const dynamic = "force-dynamic";

import { use } from "react";
import { getPokedex } from "~/lib/data/pokemon";
import HomePageContent from "./content";

export default function HomePage() {
  const dex = use(getPokedex());

  return <HomePageContent dex={dex} />;
}
