import createUser from "../../../helpers/createAccount/createUser";
import setUpAccount from "../../../helpers/createAccount/setupAccount";

export default async function handler(req, res) {
  console.log("create user");
  try {
    const { email, name, balance } = req.body;
    const userId = await createUser(email, name);
    await setUpAccount(name, balance, userId);
    res.status(200).json({ userId });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

/*
1. create user credentials first 
2. then create account details

problem
  if user credential is successfully created,
  and account details failed,

  user email can't be reused - manually delete to use again
 */
