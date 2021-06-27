import { PromptLink } from "../../components/Prompt/Prompt";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  return (
    <main className="main">
      <PromptLink
        type="success"
        icon="success"
        message="Transaction successful"
        userId={router.query.id}
      />
    </main>
  );
}
