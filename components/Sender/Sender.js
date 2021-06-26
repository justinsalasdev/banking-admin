import genClass from "../../helpers/genClass";
import useCurrency from "../../hooks/useCurrency";
import useAccount from "../../hooks/useAccount";
import useForm from "../../hooks/useForm";
import Icon from "../Icon/Icon";
import Line from "../Line/Line";
import { motion } from "framer-motion";
import { buttonVars, submitVars, variants } from "../Sender/variants";

export default function Sender({ ps, cancel, transactor, placeholder }) {
  const [formData, formErrors] = useForm();
  const { isLoading, error, handleSubmit } = transactor(formData, formErrors);
  const $ = genClass({
    block: "transactor",
    ps,
    mods: { transactor: ["sender"], actions: ["sender"] }
  });
  return (
    <motion.form {...$()} onSubmit={handleSubmit} variants={variants}>
      <Line
        id="account"
        type="text"
        placeholder={"Destination account"}
        formData={formData}
        validator={useAccount(formErrors)}
        ps={$("line").className}
        mods={{ div: ["transactor"] }}
      />
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
        <motion.button
          variants={submitVars}
          animate={isLoading ? "submit" : ""}
          type="submit"
          {...$("action")}
        >
          <Icon type="send" />
        </motion.button>
        <button type="button" {...$("action")} onClick={cancel}>
          <Icon type="cancel" />
        </button>
      </motion.div>
      {error && <p {...$("toolkit")}>{error}</p>}
    </motion.form>
  );
}

//manually revalidate page
