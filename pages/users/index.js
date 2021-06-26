import Nav from "../../components/Nav/Nav";
import UserTable from "../../components/Users/Users";
import Prompt from "../../components/Prompt/Prompt";
import Loader from "../../components/Loader/Loader";
import useUsers from "../../hooks/useUsers";

export default function Users() {
  const { isReady, isAllowed, users } = useUsers();
  return (
    <>
      <Nav />
      <main className="main">
        {(!isReady ? <Loader /> : isAllowed && <UserTable users={users} />) || (
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
