import genClass from "../../helpers/genClass";
import useCurrency from "../../hooks/useCurrency";
import useForm from "../../hooks/useForm";
import Icon from "../Icon/Icon";
import Line from "../Line/Line";
import useDeposit from "./useDeposit";

export default function Creditor({ cancel, account, oldBalance, userId }) {
  const $ = genClass({ block: "creditor" });
  const [formData, formErrors] = useForm();
  const { isLoading, error, handleSubmit } = useDeposit(
    formData,
    formErrors,
    oldBalance,
    account,
    userId
  );
  return (
    <form {...$()} onSubmit={handleSubmit}>
      <span>{error}</span>
      <Line
        id="balance"
        type="text"
        placeholder="Amount"
        formData={formData}
        validator={useCurrency(formErrors)}
        ps={$("line").className}
      />
      <div {...$("actions")}>
        <button type="submit" {...$("action")}>
          {isLoading ? "* * *" : <Icon type="send" />}
        </button>
        <button {...$("action")} onClick={cancel}>
          <Icon type="cancel" />
        </button>
      </div>
    </form>
  );
}

//manually revalidate page
