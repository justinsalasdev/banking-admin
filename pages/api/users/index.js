import getUsers from "../../../helpers/getUsers";

export default async function handler(req, res) {
  try {
    const users = await getUsers();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
