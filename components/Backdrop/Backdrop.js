import genClass from "../../helpers/genClass";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { blockVars } from "./variants";

export default function Backdrop() {
  const $ = genClass({ block: "backdrop" });
  return (
    <motion.div variants={blockVars} initial="hidden" animate="shown" {...$()}>
      <Loader />
    </motion.div>
  );
}
