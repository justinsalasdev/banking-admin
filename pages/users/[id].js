// import { useRouter } from "next/router";

import Nav from "../../components/Nav/Nav";
import Account from "../../components/Account/Account";

export default function User({ id }) {
  return (
    <>
      <Nav />
      <main className="main">
        <Account />
      </main>
    </>
  );
}

export function getServerSideProps(context) {
  const userId = context.params.id;

  console.log(userId);

  return { props: { id: userId } };
}
