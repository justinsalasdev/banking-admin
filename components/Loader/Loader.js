import genClass from "../../helpers/genClass";
import { motion } from "framer-motion";

const variants = {
  animation: {
    // scale: [1, , 1],
    "border-radius": ["0%", "50%", "0%"],
    rotate: [0, 180, 360],
    transition: { ease: "easeInOut", duration: 1.2, repeat: Infinity }
  }
};

export default function Loader() {
  const $ = genClass({ block: "loader" });
  return (
    <div {...$()}>
      <motion.div
        variants={variants}
        animate="animation"
        {...$("box")}
      ></motion.div>
    </div>
  );
}
