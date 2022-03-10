import { useRouter } from "next/router";
import { useImmer } from "use-immer";
import { GlobalStyle } from "../components/GlobalStyle";
import styled from "styled-components";
import { nanoid } from "nanoid";

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
