import HomePageContent from "./content";

export default function HomePageLoading({
  searchParams,
}: {
  searchParams: Record<string, never>;
}) {
  return <HomePageContent dex={[]} />;
}
