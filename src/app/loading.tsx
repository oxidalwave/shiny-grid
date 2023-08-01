import HomePageContent from "./content";

function defaultSeed() {
  const date = new Date();
  return new Date(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  ).getTime();
}

export default function HomePageLoading({
  searchParams,
}: {
  searchParams: Record<string, never>;
}) {
  const seed = defaultSeed();

  return <HomePageContent dex={[]} />;
}
