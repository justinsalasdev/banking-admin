import React, { useState } from "react";
import genClass from "../../helpers/genClass";
import toCurrency from "../../helpers/toCurrency";
import Sender from "../Sender/Sender";
import useTransfer from "../Sender/useTransfer";
import Transactor from "../Transactor/Transactor";
import useDeposit from "../Transactor/useDeposit";
import useWithdraw from "../Transactor/useWithdraw";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  shown: {
    opacity: 1,
    x: 0
  }
};

const forms = {
  deposit: Transactor,
  withdraw: Transactor,
  transfer: Sender
};

const transactors = {
  deposit: useDeposit,
  withdraw: useWithdraw,
  transfer: useTransfer
};

export default function Account({ details }) {
  const { name, account, balance, owner: userId } = details;
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
    <motion.div {...$()} variants={variants} animate="shown" initial="hidden">
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
        React.createElement(forms[action.type], {
          transactor: transactors[action.type](account, userId, balance),
          placeholder: `Amount to ${action.type}`,
          ps: $("form").className,
          cancel: handleCancel(action.type)
        })}
    </motion.div>
  );
}
