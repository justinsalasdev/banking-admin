import Nav from "../components/Nav/Nav";
import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Nav />
      <div>{session && <p>Signed in as {session.user.email}</p>}</div>
    </>
  );
}
