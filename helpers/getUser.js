import { db } from "../firebase/initAdmin";

export default async function getUser(userId) {
  console.log("getUser");
  return new Promise(async (resolve, reject) => {
    try {
      const querySnapshot = await db
        .collection("Accounts")
        .where("owner", "==", userId)
        .get();

      const matched = [];
      querySnapshot.forEach(doc =>
        matched.push({ account: doc.id, ...doc.data() })
      );
      resolve(matched[0]);
    } catch (err) {
      reject(err);
    }
  });
}
