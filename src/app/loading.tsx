export const revalidate = 3600;

import App from "~/components/App";

export default function HomePageLoading() {
  function defaultSeed() {
    const date = new Date();
    return new Date(
      `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    ).getTime().toString();
  }

  const seed = defaultSeed();

  return (
    <div className="p-2">
      <App dex={[]} seed={seed} />
    </div>
  );
}
