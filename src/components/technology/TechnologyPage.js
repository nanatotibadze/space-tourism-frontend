import MainNavigation from "../layouts/MainNavigation";
import classes from "../../scss/base.module.scss";
import Title from "../layouts/Title";

import TechnologyCarousel from "./TechnologyCarousel";

function TechnologyPage() {
  const num = `03`;
  const text = `space launch 001`;
  return (
    <main className={`${classes.technology} ${classes.main}`}>
      <MainNavigation></MainNavigation>
      <Title num={num} text={text}></Title>
      <TechnologyCarousel />
    </main>
  );
}

export default TechnologyPage;
