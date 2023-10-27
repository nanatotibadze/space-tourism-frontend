import MainNavigation from "../layouts/MainNavigation";
import styles from "../../scss/base.module.scss";
import PlanetsList from "./Planets";
import Title from "../layouts/Title";

function DestinationPage() {
  const num = "01";
  const text = "pick your destination";
  return (
    <main className={`${styles.destination} ${styles.main}`}>
      <MainNavigation></MainNavigation>
      <Title num={num} text={text}></Title>
      <PlanetsList />
    </main>
  );
}

export default DestinationPage;
