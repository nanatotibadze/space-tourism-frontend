import classes from "../../scss/intro.module.scss";
import styles from "../../scss/typography.module.scss";
import IntroButton from "./IntroButton";
import {Container, Row, Col} from "reactstrap";

function Intro() {
  return (
    <Container fluid className={classes.intro}>
      <Row className={styles["text-align-center"]}>
        <Col lg={6} md={12} className={classes["intro-title"]}>
          <h5 className={styles["heading-5"]}>so, you want to travel to</h5>
          <h1 className={styles["heading-1"]}>space</h1>
          <div className={classes["intro-text"]}>
            <p className={styles["paragraph_main"]}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </Col>
        <IntroButton></IntroButton>
      </Row>
    </Container>
  );
}

export default Intro;
