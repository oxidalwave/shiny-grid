import App from "~/components/App";
import { type Pokemon } from "~/lib/data/dex";

export default function SeedPageContent({
  dex,
  seed,
}: {
  dex: Pokemon[];
  seed: string;
}) {
  return (
    <div className="p-2">
      <App dex={dex} seed={seed} />
    </div>
  );
}
