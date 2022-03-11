import Head from "next/head";
import { useRouter } from "next/router";
import GamePage from "../../components/GamePage";

export default function Game({
  history,
  decreasePlayerScore,
  increasePlayerScore,
  resetScores,
}) {
  const { query } = useRouter();
  const { gameId } = query;
  const game = history.find((game) => game.id === gameId);

  if (!game) {
    return <h2>Game not found…</h2>;
  }

  const { nameOfGame, players } = game;
  return (
    <>
      <Head>
        <title>{nameOfGame} — Scorekeeper</title>
      </Head>
      <GamePage
        nameOfGame={nameOfGame}
        players={players}
        onResetScores={() => resetScores(gameId)}
        onDecreasePlayerScore={(playerId) =>
          decreasePlayerScore(gameId, playerId)
        }
        onIncreasePlayerScore={(playerId) =>
          increasePlayerScore(gameId, playerId)
        }
      />
    </>
  );
}
