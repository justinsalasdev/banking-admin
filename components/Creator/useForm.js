import { useRef } from "react";
export default function useFormContext() {
  const {
    current: { formData, formErrors }
  } = useRef({ formData: {}, formErrors: {} });

  return [formData, formErrors];
}
