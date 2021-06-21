import { db } from "../../firebase/initAdmin";

export default async function deposit(account, newBalance) {
  return new Promise(async (resolve, reject) => {
    try {
      const accountRef = db.collection("Accounts").doc(account);
      accountRef.update({ balance: newBalance });
      resolve();
    } catch (err) {
      console.log(err);
      reject("Error adding balance");
    }
  });
}
