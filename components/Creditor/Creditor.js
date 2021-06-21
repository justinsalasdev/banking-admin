import genClass from "../../helpers/genClass";
import useCurrency from "../../hooks/useCurrency";
import useForm from "../../hooks/useForm";
import Icon from "../Icon/Icon";
import Line from "../Line/Line";

export default function Creditor({ cancel }) {
  const $ = genClass({ block: "creditor" });
  const [formData, formErrors] = useForm();
  return (
    <form {...$()}>
      <Line
        id="balance"
        type="text"
        placeholder="Amount"
        formData={formData}
        validator={useCurrency(formErrors)}
      />
      <div {...$("actions")}>
        <button>
          <Icon type="send" />
        </button>
        <button onClick={cancel}>
          <Icon type="cancel" />
        </button>
      </div>
    </form>
  );
}
