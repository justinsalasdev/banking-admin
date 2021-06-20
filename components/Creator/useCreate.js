import { useReducer } from "react";
import isClean from "../../helpers/validation/isClean";

export default function useCreate(formData, formErrors) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    userData: null,
    error: null
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (isClean(formErrors)) {
      // result.user => 'Ada Lovelace'
      const res = await fetch("/api/user/create", {
        body: JSON.stringify({
          ...formData
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const result = await res.json();
      console.log(result);
    } else {
      return;
    }
  }

  return { isLoading: state.isLoading, error: state.error, handleSubmit };
}

function reducer(state, action) {
  switch (action.type) {
    case "start": {
      return { ...state, isLoading: true };
    }

    case "error": {
      return { ...state, error: action.payload, isLoading: false };
    }

    case "done": {
      return { ...state, userData: action.payload, isLoading: false };
    }
  }
}
