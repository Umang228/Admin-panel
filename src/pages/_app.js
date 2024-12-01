// pages/_app.js
import Head from 'next/head';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FED Assignment</title>
        <meta name="description" content="Welcome to My Admin Panel!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;