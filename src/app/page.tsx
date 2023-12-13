import { getServerSession } from "next-auth";
import UserInfo from "./components/UserInfo";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>{session ? <UserInfo user={session?.user} /> : <div>Not logged in, <Link href="/api/auth/signin">click here to singn</Link>.</div>}</>
  );
}
