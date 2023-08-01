import { type Pokemon } from "~/lib/data/dex";

export default function SeedPageContent({
  seed,
}: {
  dex: Pokemon[];
  seed: string;
}) {
  return <SeedPageContent dex={[]} seed={seed} />;
}
