import isClean from "../../helpers/validation/isClean";
import { signIn } from "next-auth/client";
import { useState } from "react";

export default function useLogin(formData, formErrors) {
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isClean(formErrors)) {
      setLoading(true);
      signIn("credentials", {
        ...formData
        // callbackUrl: `http://localhost:3000/users`
        //no need to callBackuRL if intention is to redirect to root
      });
    } else {
      return;
    }
  }
  return { isLoading, handleSubmit };
}
