import App from "~/components/App";
interface SeededPageProps {
  params: {
    seed: string;
    username: string;
  };
}

export default function SharedPageLoading({ params }: SeededPageProps) {
  return (
    <div className="p-2">
      <App dex={[]} seed={params.seed} initialAnswers={[]} />
    </div>
  );
}
