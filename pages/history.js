import Head from "next/head";
import HistoryPage from "../components/HistoryPage";
import Navigation from "../components/Navigation";

export default function Home({ history }) {
  return (
    <>
      <Head>
        <title>History — Scorekeeper</title>
      </Head>
      <HistoryPage history={history} />
      <Navigation />
    </>
  );
}
