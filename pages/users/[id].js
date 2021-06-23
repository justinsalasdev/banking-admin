// import { useRouter } from "next/router";
import { db } from "../../firebase/initAdmin";

import Nav from "../../components/Nav/Nav";
import Account from "../../components/Account/Account";

export default function User(props) {
  return (
    <>
      <Nav />
      <main className="main">
        <Account details={props} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const userId = context.params.id;
  const querySnapshot = await db
    .collection("Accounts")
    .where("owner", "==", userId)
    .get();

  const matched = [];
  querySnapshot.forEach(doc =>
    matched.push({ account: doc.id, ...doc.data() })
  );

  return { props: { userId, ...matched[0] } };
}

/* db.collection("cities")
    .where("capital", "==", true)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    }); */
