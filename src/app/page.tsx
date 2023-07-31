import App from "~/components/App";
import dex from "~/lib/data/dex";

function defaultSeed() {
  const date = new Date();
  return new Date(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  ).getTime();
}

export default function HomePage({
  searchParams,
}: {
  searchParams: Record<string, never>;
}) {
  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={dex} seed={seed} />
    </div>
  );
}
