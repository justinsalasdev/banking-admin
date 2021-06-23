import genClass from "../../helpers/genClass";
import Icon from "../Icon/Icon";
import Link from "next/link";

export default function Prompt() {
  const $ = genClass({ block: "prompt" });
  return (
    <div {...$()}>
      <Icon type="shield" ps={$("icon").className} />
      <p {...$("message")}>You need to login to view this page</p>
    </div>
  );
}

export function Warning() {
  const $ = genClass({ block: "prompt" });
  return (
    <div {...$()}>
      <Icon type="warning" ps={$("icon").className} />
      <p {...$("message")}>Invalid credentials</p>
    </div>
  );
}

export function Success() {
  const $ = genClass({ block: "prompt" });
  return (
    <div {...$()}>
      <Icon type="warning" ps={$("icon").className} />
      <p {...$("message")}>Transaction Successful!</p>
      <div {...$("links")}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/users">
          <a>USERS</a>
        </Link>
      </div>
    </div>
  );
}
