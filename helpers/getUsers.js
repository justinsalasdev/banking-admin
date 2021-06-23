import { admin } from "../firebase/initAdmin";

export default async function getUsers() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await admin.auth().listUsers(1000);
      resolve(
        result.users.map(user => {
          const { uid, email, displayName } = user.toJSON();
          return { uid, email, name: displayName || "User" };
        })
      );
    } catch (err) {
      reject(err);
    }
  });
}
