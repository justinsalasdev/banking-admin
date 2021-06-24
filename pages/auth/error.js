import Nav from "../../components/Nav/Nav";
import Prompt from "../../components/Prompt/Prompt";

export default function Error() {
  return (
    <>
      <Nav />
      <main className="main main--prompt">
        <Prompt type="error" icon="warning" message="Invalid credentials" />
      </main>
    </>
  );
}
