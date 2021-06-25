import genClass from "../../helpers/genClass";
import Icon from "../Icon/Icon";
import Link from "next/link";

export default function Prompt({ type, icon, message }) {
  const $ = genClass({ block: "prompt", mods: { prompt: [`${type}`] } });
  return (
    <div {...$()}>
      <Icon type={icon} ps={$("icon").className} />
      <p {...$("message")}>{message}</p>
    </div>
  );
}

//TODO: pass router.query.id to page [success]

export function PromptLink({ type, icon, message, userId }) {
  const $ = genClass({ block: "prompt", mods: { prompt: [`${type}`] } });
  return (
    <div {...$()}>
      <Icon type={icon} ps={$("icon").className} />
      <p {...$("message")}>{message}</p>
      <div {...$("links")}>
        <Link href={`/users/${userId}`}>
          <a {...$("link")}>Make another transaction</a>
        </Link>
      </div>
    </div>
  );
}
