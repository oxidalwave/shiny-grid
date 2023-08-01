import App from "~/components/App";

interface SeedPageProps {
  params: {
    seed: string;
  };
}

export default function SeedPageLoading({ params }: SeedPageProps) {
  return (
    <div className="p-2">
      <App dex={[]} seed={params.seed} initialAnswers={[]} />
    </div>
  );
}
