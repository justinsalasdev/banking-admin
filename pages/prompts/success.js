import Nav from "../../components/Nav/Nav";
import { Success } from "../../components/Prompt/Prompt";

export default function Error() {
  return (
    <>
      <Nav />
      <main className="main">
        <Success />
      </main>
    </>
  );
}
