import genClass from "../../helpers/genClass";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";

const iconTypes = ["nextjs", "sass", "firebase", "framer"];
const colors = ["#000", "#e82456", "#f5b606", "#000"];

const techVars = {
  loop: i => ({
    y: [0, -10, 0],
    "border-radius": [".2rem", "1rem", ".2rem"],
    color: ["rgba(0,0,0,.5)", colors[i], "rgba(0,0,0,.5)"],
    background: [
      "rgba(254, 254, 254, 0.4)",
      "rgba(254, 254, 254, 0.9)",
      "rgba(254, 254, 254, 0.4)"
    ],
    transition: {
      delay: i * 1,
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      ease: "easeInOut"
    }
  })
};

export default function Welcome() {
  const $ = genClass({ block: "welcome" });
  return (
    <div {...$()}>
      <h2 {...$("title")}>BANKING ADMIN</h2>
      <section {...$("section")}>
        <span {...$("ribbon")}>
          <h3 {...$("list-name")}>Admin requirements</h3>
        </span>
        <ul {...$("reqs")}>
          <li {...$("req")}>open an account</li>
          <li {...$("req")}>add balance to an account</li>
          <li {...$("req")}>deduct balance to an account</li>
          <li {...$("req")}>transfer balance between accounts</li>
        </ul>
      </section>
      <section {...$("section")}>
        <span {...$("ribbon")}>
          <h3 {...$("list-name")}>Optionals</h3>
        </span>
        <ul {...$("reqs")}>
          <li {...$("req")}>transaction history</li>
          <li {...$("req")}>close an account</li>
          <li {...$("req")}>change account data</li>
          <li {...$("req")}>multiple accounts</li>
        </ul>
      </section>
      <section {...$("stack")}>
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
      </section>
      <footer {...$("footer")}>
        DESIGNED AND BUILT BY <span {...$("author")}>JUSTIN SALAS</span>
      </footer>
    </div>
  );
}
