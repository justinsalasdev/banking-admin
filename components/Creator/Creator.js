import Line from "../Line/Line";
import useEmail from "../Line/useEmail";
import genClass from "../../helpers/genClass";
import useForm from "./useForm";
import useCurrency from "../Line/useCurrency";
import useAccount from "../Line/useAccount";
import useCreate from "./useCreate";

export default function Creator() {
  const [formData, formErrors] = useForm();
  const { isLoading, error, handleSubmit } = useCreate(formData, formErrors);

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
      {/* <Line
        id="account"
        type="text"
        placeholder="Account number"
        formData={formData}
        validator={useAccount(formErrors)}
        ps={$("line").className}
      /> */}
      <Line
        id="balance"
        type="text"
        placeholder="Initial balance"
        formData={formData}
        validator={useCurrency(formErrors)}
        ps={$("line").className}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
