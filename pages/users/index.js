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
        {(session && <UserTable users={users} />) || (
          <Prompt
            type="error"
            icon="shield"
            message="You need to login to view this page"
          />
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const users = await getUsers();
  return {
    props: {
      users: users
    },
    revalidate: 1
  };
}
