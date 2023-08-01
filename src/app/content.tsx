import App from "~/components/App";
import { defaultSeed } from "~/lib/defaultSeed";
import { type Pokemon } from "~/lib/data/dex";

export default function HomePageContent({ dex }: { dex: Pokemon[] }) {
  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={dex} seed={seed} />
    </div>
  );
}
