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

/*import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    console.log('Session', JSON.stringify(session, null, 2))
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
} */
