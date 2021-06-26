import { db, FieldValue } from "../../firebase/initAdmin";
export default function transact(account, amount) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountRef = db.collection("Accounts").doc(account);
      const historyRef = accountRef.collection("History").doc();

      await db.runTransaction(async transactor => {
        try {
          const accountDoc = await transactor.get(accountRef); //guaranteed to exists
          const balance = accountDoc.data().balance;

          transactor
            .update(accountRef, {
              balance: balance + amount //withdrawal request makes amount negative
            })
            .set(historyRef, {
              runningBalance: balance + amount,
              amount,
              timeStamp: FieldValue.serverTimestamp(),
              type: amount < 0 ? "withdrawal" : "deposit"
            });

          resolve();
        } catch (err) {
          console.log(err);
          reject("money transfer failed");
        }
      });
    } catch (err) {
      console.log(err);
      reject("unknown error occured");
    }
  });
}
