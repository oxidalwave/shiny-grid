export const revalidate = 21600;

import { defaultSeed } from "~/lib/defaultSeed";
import { redirect } from "next/navigation";

export default function HomePage() {
  const seed = defaultSeed();
  redirect(`/${seed}`);
}
