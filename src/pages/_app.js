import "bootstrap/dist/css/bootstrap.min.css"
import "@/styles/style.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
