import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Player from "../components/Player";
import Anchor from "./Anchor";

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  onDecreasePlayerScore,
  onIncreasePlayerScore,
}) {
  return (
    <>
      <header>
        <h2>{nameOfGame}</h2>
      </header>
      {players.map(({ name, score, id }) => (
        <Player
          key={id}
          name={name}
          score={score}
          onIncreasePlayerScore={() => onIncreasePlayerScore(id)}
          onDecreasePlayerScore={() => onDecreasePlayerScore(id)}
        />
      ))}
      <Button onClick={onResetScores}>Reset scores</Button>
      <Link href="/" passHref>
        <Anchor as="a">End game</Anchor>
      </Link>
    </>
  );
}
