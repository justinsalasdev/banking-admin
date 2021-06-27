import Prompt from "../../components/Prompt/Prompt";

export default function Error() {
  return (
    <main className="main">
      <Prompt type="error" icon="warning" message="Invalid credentials" />
    </main>
  );
}
