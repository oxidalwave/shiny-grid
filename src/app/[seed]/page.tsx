import App from "~/components/App";
import dex from "~/lib/data/dex";

interface SeededPageProps {
  params: {
    seed: number;
  };
}

export default function HomePage({ params }: SeededPageProps) {
  return (
    <div className="p-2">
      <App dex={dex} seed={params.seed} />
    </div>
  );
}
