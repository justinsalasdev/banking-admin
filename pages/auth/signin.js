import Login from "../../components/Login/Login";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import Loader from "../../components/Loader/Loader";

export default function SignIn() {
  const router = useRouter();
  const [session, loading] = useSession();

  if (session && !loading) {
    router.push("/");
  }
  return (
    <main className="main main--login">{loading ? <Loader /> : <Login />}</main>
  );
}
