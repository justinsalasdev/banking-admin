// import { useRouter } from "next/router";
import { db } from "../../firebase/initAdmin";
import Nav from "../../components/Nav/Nav";
import Account from "../../components/Account/Account";
import getUsers from "../../helpers/getUsers";

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

export async function getStaticProps(context) {
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

export async function getStaticPaths() {
  const users = await getUsers();
  return {
    paths: users.map(user => ({ params: { id: user.uid } })),
    fallback: false
  };
}
