import Nav from "../../components/Nav/Nav";
import { PromptLink } from "../../components/Prompt/Prompt";

export default function Success() {
  return (
    <>
      <Nav />
      <main className="main main--prompt">
        <PromptLink
          type="success"
          icon="success"
          message="Transaction successful"
        />
      </main>
    </>
  );
}
