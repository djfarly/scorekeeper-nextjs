import HistoryPage from "../components/HistoryPage";
import Navigation from "../components/Navigation";

export default function Home({ history }) {
  return (
    <>
      <HistoryPage history={history} />
      <Navigation />
    </>
  );
}
