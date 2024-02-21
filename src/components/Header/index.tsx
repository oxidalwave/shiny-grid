import { getServerSession } from "next-auth";
import { use } from "react";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
import { authOptions } from "~/server/auth";

export type HeaderProps = {
  seed: string;
}

export default function Header({ seed }: HeaderProps) {
  const session = use(getServerSession(authOptions));

  return session ? <LoggedInHeader seed={seed} /> : <LoggedOutHeader />;
}
