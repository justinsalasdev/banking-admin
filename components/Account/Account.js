import React, { useState } from "react";
import genClass from "../../helpers/genClass";
import toCurrency from "../../helpers/toCurrency";
import Sender from "../Sender/Sender";
import useTransfer from "../Sender/useTransfer";
import Transactor from "../Transactor/Transactor";
import { motion } from "framer-motion";
import { variants } from "./variants";
import useTransact from "../Transactor/useTransact";

const forms = {
  deposit: Transactor,
  withdraw: Transactor,
  transfer: Sender
};

const transactors = {
  deposit: useTransact,
  withdraw: useTransact,
  transfer: useTransfer
};

export default function Account({ details }) {
  console.log(details);
  const { name, account, balance, owner: userId } = details;
  const [action, setAction] = useState({
    type: "initial",
    started: false
  });

  function handleFormChange(type) {
    return () => setAction({ type, started: true });
  }

  function handleCancel(type) {
    return function () {
      setAction({ type, started: false });
    };
  }

  const buttons = ["deposit", "withdraw", "transfer"];

  const $ = genClass({ block: "account", mods: { [action.type]: ["active"] } });

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
        {buttons.map((text, index) => {
          return (
            <button key={index} {...$(text)} onClick={handleFormChange(text)}>
              {text}
            </button>
          );
        })}
      </div>

      {/*FORM CHANGE LOGIC*/}
      {action.started &&
        React.createElement(forms[action.type], {
          transactor: transactors[action.type](
            account,
            userId,
            balance,
            action.type
          ),
          placeholder: `Amount to ${action.type}`,
          ps: $("form").className,
          cancel: handleCancel(action.type)
        })}
    </motion.div>
  );
}
