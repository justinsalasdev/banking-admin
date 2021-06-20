import getValidators from "../../helpers/getValidators";
import iterateCheck from "../../helpers/iterateCheck";

export default function useEmail(formErrors) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //used by W3C html
  const validators = getValidators("email", [
    ["isRequired"],
    ["isInitial"],
    ["isValid", emailRegex]
  ]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
