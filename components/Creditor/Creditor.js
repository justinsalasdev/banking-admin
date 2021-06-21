import genClass from "../../helpers/genClass";
import useCurrency from "../../hooks/useCurrency";
import useForm from "../../hooks/useForm";
import Icon from "../Icon/Icon";
import Line from "../Line/Line";
import useDeposit from "./useDeposit";

export default function Creditor({ ps, cancel, account, oldBalance, userId }) {
  const $ = genClass({ block: "creditor", ps });
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
      {error && <p {...$("toolkit")}>{error}</p>}
    </form>
  );
}

//manually revalidate page
