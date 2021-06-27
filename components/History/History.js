import genClass from "../../helpers/genClass";
import Entry from "../Entry/Entry";
import { motion } from "framer-motion";
import { variants } from "./variants";

export default function History({ transactions }) {
  const $ = genClass({ block: "history" });
  return (
    <motion.div {...$()} variants={variants} animate="shown" initial="hidden">
      <div {...$("bar")}>HISTORY</div>
      <ul {...$("entries")}>
        {transactions.map(({ id, ...details }) => {
          return <Entry key={id} ps={$("entry").className} details={details} />;
        })}
      </ul>
    </motion.div>
  );
}
