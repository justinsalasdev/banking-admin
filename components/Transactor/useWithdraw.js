import isClean from "../../helpers/validation/isClean";
import { useRouter } from "next/router";
import { useReducer } from "react";
import transactionReducer from "../../reducers/transactionReducer";

export default function useWithdraw(account, userId, oldBalance) {
  return function transactor(formData, formErrors) {
    const router = useRouter();
    const [state, dispatch] = useReducer(transactionReducer, {
      oldBalance,
      error: null,
      isLoading: false
    });

    async function handleSubmit(e) {
      e.preventDefault();
      const { balance } = formData;
      const amount = Number(balance);

      if (amount > oldBalance) {
        dispatch({ type: "error", payload: "not enough balance" });
        return;
      }

      if (amount < 100) {
        dispatch({ type: "error", payload: "minimum withdrawal of B100" });
        return;
      }

      if (isClean(formErrors)) {
        dispatch({ type: "start" });
        try {
          const res = await fetch("/api/account/transact", {
            body: JSON.stringify({
              newBalance: oldBalance - amount,
              account
            }),
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST"
          });
          const result = await res.json();

          if (res.status === 200) {
            router.replace(`/users/${userId}?${new Date().valueOf()}`);
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
