import { db } from "../../firebase/initAdmin";
export default function transfer(account, destination, amount) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountsRef = db.collection("Accounts");
      const accountRef = accountsRef.doc(account);
      const destinationRef = accountsRef.doc(destination);

      await db.runTransaction(async transactor => {
        try {
          const accountDoc = await transactor.get(accountRef); //guaranteed to exists
          const accountBalance = accountDoc.data().balance;

          const destinationDoc = await transactor.get(destinationRef);
          if (!destinationDoc.exists) {
            reject("destination account does not exists");
          }
          const destinationBalance = destinationDoc.data().balance;

          //dynamically create account ref
          transactor
            .update(accountRef, {
              balance: accountBalance - amount
            })
            .update(destinationRef, {
              balance: destinationBalance + amount
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
