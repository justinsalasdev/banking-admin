import genClass from "../../helpers/genClass";
import useCurrency from "../../hooks/useCurrency";
import useForm from "../../hooks/useForm";
import Icon from "../Icon/Icon";
import Line from "../Line/Line";

export default function Transactor({ ps, cancel, transactor, placeholder }) {
  const $ = genClass({ block: "creditor", ps });
  const [formData, formErrors] = useForm();
  const { isLoading, error, handleSubmit } = transactor(formData, formErrors);
  return (
    <form {...$()} onSubmit={handleSubmit}>
      <Line
        id="balance"
        type="text"
        placeholder={placeholder}
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
