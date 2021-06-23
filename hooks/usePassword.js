import getValidators from "../helpers/validation/getValidators";
import iterateCheck from "../helpers/validation/iterateCheck";

export default function usePassword(formErrors) {
  const passwordRgx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/;
  const validators = getValidators("password", [["isRequired"], ["isInitial"]]);
  return function validator(fieldValue, id) {
    const error = iterateCheck(fieldValue, validators);
    formErrors[id] = error === "initial" ? "initial" : error;
    return error;
  };
}
