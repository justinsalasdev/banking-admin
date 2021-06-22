import genClass from "../../helpers/genClass";
import useCurrency from "../../hooks/useCurrency";
import useAccount from "../../hooks/useAccount";
import useForm from "../../hooks/useForm";
import Icon from "../Icon/Icon";
import Line from "../Line/Line";

export default function Sender({ ps, cancel, transactor, placeholder }) {
  const [formData, formErrors] = useForm();
  const { isLoading, error, handleSubmit } = transactor(formData, formErrors);
  const $ = genClass({
    block: "transactor",
    ps,
    mods: { transactor: ["sender"], actions: ["sender"] }
  });
  return (
    <form {...$()} onSubmit={handleSubmit}>
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
