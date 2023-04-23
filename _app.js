import "@/styles/globals.css";
import Head from "next/head";
//algo que envuelve a toda nuestra aplicacion
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NewsApp</title>
        <meta name="description" content="newsapp - this is an example of next js newapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
