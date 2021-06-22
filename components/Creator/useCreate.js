import { useReducer } from "react";
import isClean from "../../helpers/validation/isClean";
import { useRouter } from "next/router";
import reducer from "./reducer";

export default function useCreate(formData, formErrors) {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: null
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (isClean(formErrors)) {
      dispatch({ type: "start" });
      try {
        const res = await fetch("/api/user/create", {
          body: JSON.stringify({
            ...formData,
            balance: Number(formData.balance)
          }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        });
        const result = await res.json();

        if (res.status === 200) {
          router.push("/users");
        }

        if (res.status === 500) {
          dispatch({ type: "error", payload: result.error });
        }

        console.log(result);
      } catch (err) {
        dispatch({ type: "error", payload: "Unknown error occured" });
      }
    } else {
      return;
    }
  }

  return { isLoading: state.isLoading, error: state.error, handleSubmit };
}
