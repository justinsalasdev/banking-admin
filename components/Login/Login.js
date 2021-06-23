import Line from "../Line/Line";
import genClass from "../../helpers/genClass";
import useEmail from "../../hooks/useEmail";
import useForm from "../../hooks/useForm";
import usePassword from "../../hooks/usePassword";
import useLogin from "./useLogin";

export default function Creator() {
  const [formData, formErrors] = useForm();
  const { isLoading, handleSubmit } = useLogin(formData, formErrors);

  const $ = genClass({ block: "creator" });

  return (
    <form {...$()} onSubmit={handleSubmit}>
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
      <button {...$("action")} type="submit">
        {isLoading ? "* * *" : "Login"}
      </button>
    </form>
  );
}
