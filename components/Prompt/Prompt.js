import genClass from "../../helpers/genClass";
import Icon from "../Icon/Icon";

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
