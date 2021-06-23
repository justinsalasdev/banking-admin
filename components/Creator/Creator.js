import Line from "../Line/Line";
import genClass from "../../helpers/genClass";
import useCreate from "./useCreate";
import useCurrency from "../../hooks/useCurrency";
import useName from "../../hooks/useName";
import useEmail from "../../hooks/useEmail";
import useForm from "../../hooks/useForm";

export default function Creator() {
  const [formData, formErrors] = useForm();
  const { isLoading, error, handleSubmit } = useCreate(formData, formErrors);

  const $ = genClass({ block: "creator" });

  return (
    <form {...$()} onSubmit={handleSubmit}>
      <p {...$("error")}>{error}</p>
      <Line
        id="name"
        type="text"
        placeholder="Name"
        formData={formData}
        validator={useName(formErrors)}
        ps={$("line").className}
      />
      <Line
        id="email"
        type="text"
        placeholder="Email"
        formData={formData}
        validator={useEmail(formErrors)}
        ps={$("line").className}
      />
      <Line
        id="balance"
        type="text"
        placeholder="Initial balance"
        formData={formData}
        validator={useCurrency(formErrors)}
        ps={$("line").className}
      />
      <button {...$("action")} type="submit">
        {isLoading ? "* * *" : "Submit"}
      </button>
    </form>
  );
}
