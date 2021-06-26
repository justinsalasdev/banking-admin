import genClass from "../../helpers/genClass";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import { blockVars, sectionVars, techVars, titleVars } from "./variants";
import { iconTypes, optionals, reqs } from "./static";

export default function Welcome() {
  const $ = genClass({ block: "welcome" });
  return (
    <motion.div variants={blockVars} initial="hidden" animate="shown" {...$()}>
      <h2 {...$("title")}>BANKING ADMIN</h2>
      <motion.section variants={sectionVars} {...$("section")}>
        <span {...$("ribbon")}>
          <h3 {...$("list-name")}>Admin requirements</h3>
        </span>
        <ul {...$("reqs")}>
          {reqs.map((text, index) => (
            <li key={index} {...$("req")}>
              {text}
            </li>
          ))}
        </ul>
      </motion.section>
      <motion.section variants={sectionVars} {...$("section")}>
        <span {...$("ribbon")}>
          <h3 {...$("list-name")}>Optionals</h3>
        </span>
        <ul {...$("reqs")}>
          {optionals.map((text, index) => (
            <li key={index} {...$("req")}>
              {text}
            </li>
          ))}
        </ul>
      </motion.section>
      <motion.section variants={sectionVars} {...$("stack")}>
        <span {...$("ribbon")}>
          <h3 {...$("list-name")}>Built with</h3>
        </span>
        <ul {...$("techs")}>
          {iconTypes.map((iconType, index) => {
            return (
              <motion.li
                custom={index}
                variants={techVars}
                animate="loop"
                {...$("tech")}
                key={index}
              >
                <Icon type={iconType} />
              </motion.li>
            );
          })}
        </ul>
      </motion.section>
      <footer {...$("footer")}>
        DESIGNED AND BUILT BY <span {...$("author")}>JUSTIN SALAS</span>
      </footer>
    </motion.div>
  );
}
