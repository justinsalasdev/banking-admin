import Line from "../Line/Line";
import genClass, { toggler as $t } from "../../helpers/genClass";
import useEmail from "../../hooks/useEmail";
import useForm from "../../hooks/useForm";
import usePassword from "../../hooks/usePassword";
import useLogin from "./useLogin";
import { motion } from "framer-motion";
import { formVars, btnVars } from "./variants";

export default function Creator() {
  const [formData, formErrors] = useForm();
  const { isLoading, handleSubmit } = useLogin(formData, formErrors);

  const $ = genClass({
    block: "creator",
    mods: { creator: ["login"], action: [$t(isLoading, "loading")] }
  });

  return (
    <motion.form
      variants={formVars}
      initial="hidden"
      animate="shown"
      {...$()}
      onSubmit={handleSubmit}
    >
      <Line
        id="email"
        type="text"
        placeholder="Email"
        formData={formData}
        validator={useEmail(formErrors)}
        ps={$("line").className}
      />
      <Line
        id="password"
        type="password"
        placeholder="Password"
        formData={formData}
        validator={usePassword(formErrors)}
        ps={$("line").className}
      />
      <motion.button
        variants={btnVars}
        animate={isLoading ? "submit" : ""}
        {...$("action")}
        type="submit"
      >
        {isLoading ? "" : "Login"}
      </motion.button>
    </motion.form>
  );
}
