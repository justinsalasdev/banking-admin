import genClass from "../../helpers/genClass";
import Icon from "../Icon/Icon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Prompt({ type, icon, message }) {
  const $ = genClass({ block: "prompt", mods: { prompt: [`${type}`] } });
  return (
    <div {...$()}>
      <Icon type={icon} ps={$("icon").className} />
      <p {...$("message")}>{message}</p>
    </div>
  );
}

export function PromptLink({ type, icon, message }) {
  const router = useRouter();

  const $ = genClass({ block: "prompt", mods: { prompt: [`${type}`] } });
  return (
    <div {...$()}>
      <Icon type={icon} ps={$("icon").className} />
      <p {...$("message")}>{message}</p>
      <div {...$("links")}>
        <Link href={`/users/${router.query.id}`}>
          <a {...$("link")}>Make another transaction</a>
        </Link>
      </div>
    </div>
  );
}
