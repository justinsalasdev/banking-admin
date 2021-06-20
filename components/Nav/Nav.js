import genClass from "../../helpers/genClass";
import Link from "next/link";

export default function Nav() {
  const $ = genClass({ block: "nav" });
  return (
    <nav {...$()}>
      <Link href="/">
        <a {...$("home")}>HOME</a>
      </Link>
      <ul {...$("list")}>
        <li {...$("item")}>
          <Link href="/users">
            <a {...$("link")}>USERS</a>
          </Link>
        </li>
        <li {...$("item")}>
          <Link href="/">
            <a {...$("link")}>LOGOUT</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
