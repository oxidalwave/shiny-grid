import Grid from "~/components/Grid";
import dex from "~/lib/data/dex";

export default function HomePage() {
  const date = new Date();
  const seed = new Date(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  ).getTime();

  return <Grid dex={dex} seed={seed} />;
}
