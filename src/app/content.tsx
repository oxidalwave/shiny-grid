import App from "~/components/App";
import { type Pokemon } from "~/lib/data/dex";

function defaultSeed() {
  const date = new Date();
  return new Date(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  ).getTime();
}

export default function HomePageContent({ dex }: { dex: Pokemon[] }) {
  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={dex} seed={seed} />
    </div>
  );
}
