import transact from "../../../helpers/account/transact";

export default async function handler(req, res) {
  try {
    const { account, amount } = req.body;
    await transact(account, amount);
    res.status(200).json({ message: "Transaction successful" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
