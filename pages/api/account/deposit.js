import deposit from "../../../helpers/account/deposit";

export default async function handler(req, res) {
  try {
    const { account, newBalance } = req.body;
    await deposit(account, newBalance);
    res.status(200).json({ message: "Succesfully updated balance" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
