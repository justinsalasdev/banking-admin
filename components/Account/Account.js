import { useState } from "react";
import genClass from "../../helpers/genClass";
import toCurrency from "../../helpers/toCurrency";
import Sender from "../Sender/Sender";
import Transactor from "../Transactor/Transactor";
import useDeposit from "../Transactor/useDeposit";
import useWithdraw from "../Transactor/useWithdraw";

const formRenderer = {
  deposit: props => <Transactor {...props} />,
  withdraw: props => <Transactor {...props} />,
  transfer: props => <Sender {...props} />,
  initial: () => ""
};

const transactors = {
  deposit: useDeposit,
  withdraw: useWithdraw,
  transfer: () => "hahaha"
};

export default function Account({ details }) {
  const { name, account, balance, userId } = details;
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
        <p {...$("name")}>{name}</p>
        <p {...$("account")}>{account}</p>
      </div>
      <div {...$("info")}>
        <p {...$("balance")}>₿{toCurrency(balance)}</p>
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
          transactor: transactors[action.type](balance, account, userId),
          placeholder: `Amount to ${action.type}`,
          ps: $("form").className,
          cancel: handleCancel(action.type)
        })}
    </div>
  );
}
