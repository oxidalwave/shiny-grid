export const revalidate = 3600;

import App from "~/components/App";

function defaultSeed() {
  const date = new Date();
  return new Date(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  ).getTime();
}

export default function HomePageLoading() {
  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={[]} seed={seed} />
    </div>
  );
}
