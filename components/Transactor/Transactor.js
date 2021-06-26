import genClass from "../../helpers/genClass";
import useCurrency from "../../hooks/useCurrency";
import useForm from "../../hooks/useForm";
import Icon from "../Icon/Icon";
import Line from "../Line/Line";
import { motion } from "framer-motion";
import { buttonVars, variants } from "./variants";

export default function Transactor({ ps, cancel, transactor, placeholder }) {
  const $ = genClass({ block: "transactor", ps });
  const [formData, formErrors] = useForm();
  const { isLoading, error, handleSubmit } = transactor(formData, formErrors);

  return (
    <motion.form {...$()} onSubmit={handleSubmit} variants={variants}>
      <Line
        id="balance"
        type="text"
        placeholder={placeholder}
        formData={formData}
        validator={useCurrency(formErrors)}
        ps={$("line").className}
        mods={{ div: ["transactor"] }}
      />
      <motion.div {...$("actions")} variants={buttonVars}>
        <button type="submit" {...$("action")}>
          {isLoading ? "* * *" : <Icon type="send" />}
        </button>
        <button type="button" {...$("action")} onClick={cancel}>
          <Icon type="cancel" />
        </button>
      </motion.div>
      {error && <p {...$("toolkit")}>{error}</p>}
    </motion.form>
  );
}

//manually revalidate page
