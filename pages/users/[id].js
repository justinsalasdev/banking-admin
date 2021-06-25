import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import getUsers from "../../helpers/getUsers";
import Account from "../../components/Account/Account";

export default function User({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("effect runs");
    async function getUser() {
      try {
        const res = await fetch(`/api/users/${userId}`);
        const result = await res.json();
        setUser(result);
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, []);
  return (
    <>
      <Nav />
      {(user && (
        <main className="main">
          {" "}
          <Account details={user} />
        </main>
      )) || <p>Loading</p>}
    </>
  );
}

export async function getStaticProps(context) {
  const userId = context.params.id;
  return { props: { userId } };
}

export async function getStaticPaths() {
  const users = await getUsers();
  return {
    paths: users.map(user => ({ params: { id: user.uid } })),
    fallback: false
  };
}
