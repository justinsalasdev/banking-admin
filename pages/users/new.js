import Nav from "../../components/Nav/Nav";
import Creator from "../../components/Creator/Creator";
import { useSession } from "next-auth/client";
import Prompt from "../../components/Prompt/Prompt";

export default function New() {
  const [session, loading] = useSession();
  return (
    <>
      <Nav />
      <main className="main main--new">
        {(session && <Creator />) || <Prompt />}
      </main>
    </>
  );
}
