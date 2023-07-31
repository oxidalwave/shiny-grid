import Grid from "~/components/Grid";
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
  searchParams: { seed: string | undefined };
}) {
  let seed: number;
  if (searchParams.seed && !isNaN(Number(searchParams.seed))) {
    seed = Number(searchParams.seed);
  } else {
    seed = defaultSeed();
  }

  return (
    <div className="p-2">
      <Grid dex={dex} seed={seed} />
    </div>
  );
}
