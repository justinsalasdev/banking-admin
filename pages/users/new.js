import Creator from "../../components/Creator/Creator";
import { useSession } from "next-auth/client";
import Prompt from "../../components/Prompt/Prompt";
import Loader from "../../components/Loader/Loader";

export default function New() {
  const [session, loading] = useSession();
  return (
    <main className="main main--new">
      {loading ? <Loader /> : (session && <Creator />) || <Prompt />}
    </main>
  );
}
