import Intro from "./Intro";
import MainNavigation from "../layouts/MainNavigation";
import classes from "../../scss/base.module.scss";

function Homepage() {
  return (
    <main className={`${classes.homepage} ${classes.main}`}>
      <MainNavigation></MainNavigation>
      <Intro></Intro>
    </main>
  );
}

export default Homepage;
