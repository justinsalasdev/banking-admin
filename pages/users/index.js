import Nav from "../../components/Nav/Nav";
import UserTable from "../../components/Users/Users";
import { useSession } from "next-auth/client";
import Prompt from "../../components/Prompt/Prompt";
import getUsers from "../../helpers/getUsers";

export default function Users({ users }) {
  const [session, loading] = useSession();
  return (
    <>
      <Nav />
      <main className="main">
        {(session && <UserTable users={users} />) || <Prompt />}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const users = await getUsers();
  return {
    props: {
      users: users
    } // will be passed to the page component as props
  };
}
