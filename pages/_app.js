import "../styles/index.sass";
import { Provider } from "next-auth/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Nav/Nav";
import Backdrop from "../components/Backdrop/Backdrop";

function MyApp({ Component, pageProps }) {
  const [isChanging, setChanging] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url, { shallow }) => {
      setChanging(true);
    };

    const handleDone = (url, { shallow }) => {
      setChanging(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleDone);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleDone);
    };
  }, []);
  return (
    <Provider session={pageProps.session}>
      <>
        {isChanging && <Backdrop />}
        <Nav />
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

export default MyApp;
