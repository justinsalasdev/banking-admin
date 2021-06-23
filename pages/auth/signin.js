import Nav from "../../components/Nav/Nav";
import Login from "../../components/Login/Login";

export default function SignIn() {
  return (
    <>
      <Nav />
      <main className="main">
        <Login />
      </main>
    </>
  );
}

// import { getCsrfToken } from "next-auth/client";

// export default function SignIn({ csrfToken }) {
//   return (
//     <form method="post" action="/api/auth/callback/credentials">
//       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//       <label>
//         Username
//         <input name="username" type="text" />
//       </label>
//       <label>
//         Password
//         <input name="password" type="password" />
//       </label>
//       <button type="submit">Sign in</button>
//     </form>
//   );
// }

// SignIn.getInitialProps = async context => {
//   return {
//     csrfToken: await getCsrfToken(context)
//   };
// };
