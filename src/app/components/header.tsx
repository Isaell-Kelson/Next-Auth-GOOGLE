import Link from "next/link";
import { getServerSession } from "next-auth";


export default async function Header() {
  const session = await getServerSession();

  if (session) {
    return <></>;
  }

  return (
    <header className="fixed w-full h-20 flex items-center bg-amber-800 text-slate-50">
      <nav className="w-full flex items-center justify-between m-auto max-w-screen-xl">
        <Link href="/">Logo</Link>
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/public">Público</Link>
          </li>
          <li>
            <Link href="/api/auth/signin">Privado</Link>
          </li>          
          <li>
            <Link href="/api/auth/signin">Logar</Link>
          </li>
          <li>
            <Link href="/api/auth/signout">Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
