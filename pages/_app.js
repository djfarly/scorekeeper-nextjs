import { useRouter } from "next/router";
import { useImmer } from "use-immer";
import { GlobalStyle } from "../components/GlobalStyle";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [history, updateHistory] = useImmer([]);

  const { push } = useRouter();

  function createGame({ nameOfGame, playerNames }) {
    const newGame = {
      players: playerNames.map((name) => ({ name, score: 0, id: nanoid() })),
      nameOfGame,
      id: nanoid(),
    };

    updateHistory((history) => {
      history.unshift(newGame);
    });
    push(`game/${newGame.id}`);
  }

  function resetScores(gameId) {
    updateHistory((history) => {
      const gameIndex = history.findIndex((game) => game.id === gameId);
      history[gameIndex].players = history[gameIndex].players.map((player) => ({
        ...player,
        score: 0,
      }));
    });
  }

  function increasePlayerScore(gameId, playerId) {
    updateHistory((history) => {
      const gameIndex = history.findIndex((game) => game.id === gameId);
      const playerIndex = history[gameIndex].players.findIndex(
        (player) => player.id === playerId
      );
      history[gameIndex].players[playerIndex].score++;
    });
  }

  function decreasePlayerScore(gameId, playerId) {
    updateHistory((history) => {
      const gameIndex = history.findIndex((game) => game.id === gameId);
      const playerIndex = history[gameIndex].players.findIndex(
        (player) => player.id === playerId
      );
      history[gameIndex].players[playerIndex].score--;
    });
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Scorekeeper</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎲</text></svg>"
        />
      </Head>
      <AppLayout>
        <h1>Scorekeeper</h1>
        <Component
          {...pageProps}
          onCreateGame={createGame}
          resetScores={resetScores}
          increasePlayerScore={increasePlayerScore}
          decreasePlayerScore={decreasePlayerScore}
          history={history}
        />
      </AppLayout>
    </>
  );
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`;

export default MyApp;
