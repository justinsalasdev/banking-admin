import { signOut } from "next-auth/client";
import { useSession } from "next-auth/client";
import genClass, { toggler as $t } from "../../helpers/genClass";
import Link from "next/link";

export default function Nav() {
  const [session, loading] = useSession();

  const $ = genClass({
    block: "nav",
    mods: {
      link: [$t(loading, "loading")],
      home: [$t(loading, "loading")],
      logout: [$t(loading, "loading")]
    }
  });

  return (
    <nav {...$()}>
      <Link href="/">
        <a {...$("home")}>HOME</a>
      </Link>
      <ul {...$("list")}>
        {session && (
          <li {...$("item")}>
            <Link href="/users">
              <a {...$("link")}>USERS</a>
            </Link>
          </li>
        )}
        {!session && (
          <li {...$("item")}>
            <Link href="/auth/signin">
              <a {...$("link")}>LOGIN</a>
            </Link>
          </li>
        )}
        {session && (
          <li {...$("item")}>
            <button
              {...$("logout")}
              onClick={() => {
                signOut({
                  callbackUrl: `http://localhost:3000/auth/signin`
                });
              }}
            >
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

function NoNav() {
  const $ = genClass({ block: "nav", mods: { nav: ["none"] } });
  return <nav {...$()}></nav>;
}
