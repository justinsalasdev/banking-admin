import genClass from "../../helpers/genClass";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";
import {
  blockVars,
  reqsVars,
  sectionVars,
  techVars,
  reqVars
} from "./variants";
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
        <motion.ul variants={reqsVars} {...$("reqs")}>
          {reqs.map((text, index) => (
            <motion.li variants={reqVars} key={index} {...$("req")}>
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
      <motion.section variants={sectionVars} {...$("section")}>
        <span {...$("ribbon")}>
          <h3 {...$("list-name")}>Optionals</h3>
        </span>
        <motion.ul variants={reqsVars} ul {...$("reqs")}>
          {optionals.map((text, index) => (
            <motion.li variants={reqVars} li key={index} {...$("req")}>
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
      <motion.section variants={sectionVars} {...$("stack")}>
        <span {...$("ribbon")}>
          <h3 {...$("list-name")}>Built with</h3>
        </span>
        <motion.ul variants={reqsVars} {...$("techs")}>
          {iconTypes.map((iconType, index) => {
            return (
              <motion.li
                custom={index}
                variants={techVars}
                {...$("tech")}
                key={index}
              >
                <Icon type={iconType} />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.section>
      <footer {...$("footer")}>
        DESIGNED AND BUILT BY <span {...$("author")}>JUSTIN SALAS</span>
      </footer>
    </motion.div>
  );
}
