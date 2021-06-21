import { admin } from "../../firebase/initAdmin";
import Nav from "../../components/Nav/Nav";
import UserTable from "../../components/Users/Users";

export default function Users({ users }) {
  return (
    <>
      <Nav />
      <main className="main">
        <UserTable users={users} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  async function getUsers(/*nextToken*/) {
    const result = await admin.auth().listUsers(1000);
    return Promise.resolve(
      result.users.map(user => {
        const { uid, email, displayName } = user.toJSON();
        return { uid, email, name: displayName || "User" };
      })
    );
  }

  const users = await getUsers();

  return {
    props: {
      users: users
    } // will be passed to the page component as props
  };
}
