import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

export default async function Avatar() {
  const session = await getServerSession(authOptions);

  return session ? <SignOut /> : <SignIn />;
}
