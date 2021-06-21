//start
import isClean from "../../helpers/validation/isClean";
import { useReducer } from "react";
import { useRouter } from "next/router";
export default function useDeposit(
  formData,
  formErrors,
  oldBalance,
  account,
  userId
) {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    error: null,
    isLoading: false
  });

  async function useWithdraw(e) {
    const { balance } = formData;
    e.preventDefault();

    if (balance)
      if (isClean(formErrors)) {
        dispatch({ type: "start" });
        try {
          const res = await fetch("/api/account/deposit", {
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
}

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, error: null };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    case "done":
      return { ...state, isLoading: false };
  }
}
