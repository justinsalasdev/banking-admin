import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav/Nav";
export default function Test() {
  return (
    <>
      <Nav />
      <main className="main">
        <Loader />
      </main>
    </>
  );
}
