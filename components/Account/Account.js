import { useState } from "react";
import genClass from "../../helpers/genClass";
import toCurrency from "../../helpers/toCurrency";
import Creditor from "../Creditor/Creditor";
import Debtor from "../Debtor/Debtor";
import Sender from "../Sender/Sender";

const formRenderer = {
  deposit: props => <Creditor {...props} />,
  withdraw: props => <Debtor {...props} />,
  transfer: props => <Sender {...props} />,
  initial: () => ""
};

export default function Account({ details }) {
  const [action, setAction] = useState({
    type: "initial",
    started: false
  });

  function handleCancel(type) {
    return function () {
      setAction({ type, started: false });
    };
  }

  const $ = genClass({ block: "account" });
  return (
    <div {...$()}>
      <div {...$("bar")}>
        <p {...$("name")}>{details.name}</p>
        <p {...$("account")}>{details.account}</p>
      </div>
      <div {...$("info")}>
        <p {...$("balance")}>₿{toCurrency(details.balance)}</p>
      </div>
      <div {...$("actions")}>
        <button
          {...$("deposit")}
          onClick={() => setAction({ type: "deposit", started: true })}
        >
          DEPOSIT
        </button>
        <button
          {...$("withdraw")}
          onClick={() => setAction({ type: "withdraw", started: true })}
        >
          WITHDRAW
        </button>
        <button
          {...$("transfer")}
          onClick={() => setAction({ type: "transfer", started: true })}
        >
          TRANSFER
        </button>
      </div>

      {action.started &&
        formRenderer[action.type]({
          userId: details.userId,
          account: details.account,
          oldBalance: details.balance,
          ps: $("form").className,
          text: "hahaha",
          cancel: handleCancel(action.type)
        })}
    </div>
  );
}
