import getValidators from "../../helpers/getValidators";
import iterateCheck from "../../helpers/iterateCheck";

export default function useCurrency(formErrors) {
  const currencyRegex = /^[0-9]+(\.[0-9]{1,2})?$/; //used by HTML W3c
  const validators = getValidators("amount", [
    ["isRequired"],
    ["isInitial"],
    ["isValid", currencyRegex]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
