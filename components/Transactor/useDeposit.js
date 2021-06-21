//start
import isClean from "../../helpers/validation/isClean";
import { useRouter } from "next/router";
import reducer from "./reducer";
import { useReducer } from "react";

export default function (oldBalance, account, userId) {
  return function useDeposit(formData, formErrors) {
    const router = useRouter();
    const [state, dispatch] = useReducer(reducer, {
      error: null,
      isLoading: false
    });

    async function handleSubmit(e) {
      e.preventDefault();
      const { balance } = formData;

      if (Number(balance) <= 0) {
        dispatch({ type: "error", payload: "can't deposit 0" });
        return;
      }

      if (isClean(formErrors)) {
        dispatch({ type: "start" });
        try {
          const res = await fetch("/api/account/transact", {
            body: JSON.stringify({
              newBalance: Number(balance) + oldBalance,
              account
            }),
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST"
          });
          const result = await res.json();

          if (res.status === 200) {
            router.replace(`/users/${userId}`);
            dispatch({ type: "done" });
          }

          if (res.status === 500) {
            dispatch({ type: "error", payload: result.error });
          }

          console.log(result);
        } catch (err) {
          console.log(err);
          dispatch({ type: "error", payload: "Unknown error occured" });
        }
      } else {
        return;
      }
    }

    return { isLoading: state.isLoading, error: state.error, handleSubmit };
  };
}
