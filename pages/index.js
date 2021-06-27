import genClass from "../helpers/genClass";
import Welcome from "../components/Welcome/Welcome";

export default function Home() {
  const $ = genClass({ block: "main" });
  return (
    <main {...$()}>
      <Welcome />
    </main>
  );
}
