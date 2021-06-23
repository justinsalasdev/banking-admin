import { db } from "../../firebase/initAdmin";

export default async function setUpAccount(name, balance, userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const numRef = db.collection("UserNum").doc("userCount");
      await db.runTransaction(async transactor => {
        try {
          const countDoc = await transactor.get(numRef);
          const count = countDoc.data().count;
          const accountNumber = String(count + 1).padStart(6, "0");

          //dynamically create account ref
          const accountRef = db.collection("Accounts").doc(accountNumber);
          transactor
            .set(accountRef, {
              name,
              owner: userId,
              balance
            })
            .update(numRef, { count: count + 1 });

          resolve();
        } catch (err) {
          console.log(err);
          throw "Create user transaction failed";
        }
      });
    } catch (err) {
      console.log(err);
      reject("Error setting up account");
    }
  });
}
