import genClass from "../../helpers/genClass";
import Icon from "../Icon/Icon";
import Link from "next/link";
import { motion } from "framer-motion";
import { variants } from "./variants";

export default function Prompt({ type, icon, message }) {
  const $ = genClass({ block: "prompt", mods: { prompt: [`${type}`] } });
  return (
    <motion.div {...$()} variants={variants} initial="hidden" animate="shown">
      <Icon type={icon} ps={$("icon").className} />
      <p {...$("message")}>{message}</p>
    </motion.div>
  );
}

//TODO: pass router.query.id to page [success]

export function PromptLink({ type, icon, message, userId }) {
  const $ = genClass({ block: "prompt", mods: { prompt: [`${type}`] } });
  return (
    <motion.div {...$()} variants={variants} initial="hidden" animate="shown">
      <Icon type={icon} ps={$("icon").className} />
      <p {...$("message")}>{message}</p>
      <div {...$("links")}>
        <Link href={`/users/${userId}`}>
          <a {...$("link")}>Make another transaction</a>
        </Link>
      </div>
    </motion.div>
  );
}
