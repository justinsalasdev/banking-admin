import getUser from "../../../helpers/getUser";

export default async function handler(req, res) {
  console.log("getUser");
  try {
    const { id: userId } = req.query;
    const user = await getUser(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
