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

export default function Account() {
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
        <p {...$("name")}>NAME</p>
        <p {...$("account")}>ACCOUNT #</p>
      </div>
      <div {...$("info")}>
        <p {...$("balance")}>₿{toCurrency(1239018)}</p>
      </div>
      <div {...$("actions")}>
        <button
          {...$("action")}
          onClick={() => setAction({ type: "deposit", started: true })}
        >
          DEPOSIT
        </button>
        <button
          {...$("action")}
          onClick={() => setAction({ type: "withdraw", started: true })}
        >
          WITHDRAW
        </button>
        <button
          {...$("action")}
          onClick={() => setAction({ type: "transfer", started: true })}
        >
          TRANSFER
        </button>
      </div>

      {(action.started &&
        formRenderer[action.type]({
          text: "hahaha",
          cancel: handleCancel(action.type)
        })) ||
        "NO ACTION"}
    </div>
  );
}
