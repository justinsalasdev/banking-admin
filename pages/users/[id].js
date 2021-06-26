import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import getUsers from "../../helpers/getUsers";
import Account from "../../components/Account/Account";
import Loader from "../../components/Loader/Loader";

export default function User({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
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
      <main className="main">
        {(user && <Account details={user} />) || <Loader />}
      </main>
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
