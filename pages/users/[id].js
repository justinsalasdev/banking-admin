import Nav from "../../components/Nav/Nav";
import getUsers from "../../helpers/getUsers";
import Account from "../../components/Account/Account";
import Loader from "../../components/Loader/Loader";
import History from "../../components/History/History";
import useUser from "../../hooks/useUser";
import genClass from "../../helpers/genClass";

export default function User({ userId }) {
  const { user, isReady } = useUser(userId);
  const $ = genClass({ block: "main", mods: { main: ["user"] } });
  return (
    <>
      <Nav />
      <main {...$()}>
        {(isReady && (
          <>
            <Account ps={$("account").className} details={user} />
            <History ps={$("history").className} transactions={user.history} />
          </>
        )) || <Loader />}
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
    fallback: true
  };
}
