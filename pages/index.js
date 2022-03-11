import Head from "next/head";
import GameForm from "../components/GameForm";
import Navigation from "../components/Navigation";

export default function Home({ onCreateGame }) {
  return (
    <>
      <Head>
        <title>Create Game — Scorekeeper</title>
      </Head>
      <GameForm onCreateGame={onCreateGame} />
      <Navigation />
    </>
  );
}
