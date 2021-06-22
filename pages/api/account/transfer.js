import transfer from "../../../helpers/account/transfer";

export default async function handler(req, res) {
  try {
    const { account, destination, amount } = req.body;
    await transfer(account, destination, amount);
    res.status(200).json({ message: "money transfer successful" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

//process
//read account balance
//read destination balance
//update account balance
//update destination balance
