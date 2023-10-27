import MainNavigation from "../layouts/MainNavigation";
import classes from "../../scss/base.module.scss";
import Title from "../layouts/Title";

import CrewPlain from "./CrewCarousel";
function CrewPage() {
  const num = `02`;
  const text = `meet your crew`;
  return (
    <main className={`${classes.crew} ${classes.main}`}>
      <MainNavigation></MainNavigation>
      <Title num={num} text={text}></Title>
      <CrewPlain />
    </main>
  );
}

export default CrewPage;
