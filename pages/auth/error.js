import Nav from "../../components/Nav/Nav";
import { Warning } from "../../components/Prompt/Prompt";

export default function Error() {
  return (
    <>
      <Nav />
      <main className="main">
        <Warning />
      </main>
    </>
  );
}
