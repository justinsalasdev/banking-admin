import { admin } from "../../firebase/initAdmin";

export default async function createUser(email) {
  return new Promise(async (resolve, reject) => {
    try {
      const userRecord = await admin.auth().createUser({
        email,
        password: "initial"
      });
      resolve(userRecord.uid);
    } catch (err) {
      reject(err.errorInfo.message);
    }
  });
}
