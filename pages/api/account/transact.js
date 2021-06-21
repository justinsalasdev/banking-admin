import transact from "../../../helpers/account/transact";

export default async function handler(req, res) {
  try {
    const { account, newBalance } = req.body;
    await transact(account, newBalance);
    res.status(200).json({ message: "Succesfully updated balance" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
