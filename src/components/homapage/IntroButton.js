import classes from "../../scss/intro.module.scss";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
function IntroButton() {
  return (
    <Col lg={6} md={12} className={classes["intro-button-section"]}>
      <Link to='/destination' className={classes.link}>
        <button type='button' className={`${classes["intro-button"]}`}>
          <motion.span whileHover={{scale: 1.1}} transition={{type: "spring"}}>
            {" "}
            explore{" "}
          </motion.span>
        </button>
      </Link>
    </Col>
  );
}

export default IntroButton;
