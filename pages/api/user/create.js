import createUser from "../../../helpers/createAccount/createUser";
import setUpAccount from "../../../helpers/createAccount/setupAccount";

export default async function handler(req, res) {
  try {
    const { email, balance } = req.body;
    const userId = await createUser(email);
    await setUpAccount(balance, userId);
    res.status(200).json({ userId });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

/*
1. create user credentials first 
2. then create account details
 */
