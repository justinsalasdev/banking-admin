import { db, TimeStamp } from "../firebase/initAdmin";

export default async function getUser(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const usersSnapshot = await db
        .collection("Accounts")
        .where("owner", "==", userId)
        .get();

      const users = [];
      usersSnapshot.forEach(userDoc =>
        users.push({ account: userDoc.id, ...userDoc.data() })
      );

      const history = [];
      const historySnaphot = await db
        .collection("Accounts")
        .doc(users[0].account)
        .collection("History")
        .orderBy("timeStamp", "desc")
        .limit(5)
        .get();

      historySnaphot.forEach(historyDoc =>
        history.push({
          id: historyDoc.id,
          ...historyDoc.data(),
          timeStamp: historyDoc.data().timeStamp.toDate()
        })
      );

      resolve({ ...users[0], history });
    } catch (err) {
      reject(err);
    }
  });
}
