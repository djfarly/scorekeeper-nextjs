import GameForm from "../components/GameForm";
import Navigation from "../components/Navigation";

export default function Home({ onCreateGame }) {
  return (
    <>
      <GameForm onCreateGame={onCreateGame} />
      <Navigation />
    </>
  );
}
