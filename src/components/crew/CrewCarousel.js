import classes from "../../scss/crew.module.scss";
import typo from "../../scss/typography.module.scss";
import React, {useState} from "react";
import {Container, Row, Col} from "reactstrap";
import {useSelector} from "react-redux";
import {motion, AnimatePresence} from "framer-motion";

function CrewCarousel() {
  const items = useSelector((state) => state.spaceData.crew);
  const [activeIndex, setActiveIndex] = useState(1);
  const buttons = [1, 2, 3, 4];

  function changeIndexHandler(e) {
    e.preventDefault();
    setActiveIndex(e.target.value);
    e.currentTarget.classList.toggle(`${classes.active}`);
  }

  const crewMember = items[activeIndex - 1];
  const {bio, images, role, name} = crewMember;

  return (
    <motion.div
      layout
      className={classes["carousel-item"]}
      initial={{opacity: 0, x: 200}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: 200}}
    >
      <Container fluid className={classes["container-fluid"]}>
        <Row className={classes.crew_row}>
          <Col lg='6' md='12' className={classes.crew_info}>
            {" "}
            <h4
              className={`${typo["heading-4"]} ${classes["crew_info--title"]}`}
            >
              {role}
            </h4>
            <h3
              className={`${typo["heading-3"]} ${classes["crew_info--title2"]}`}
            >
              {name}
            </h3>
            <p className={`${classes.crew_p} ${classes[" crew_p--4"]}`}>
              {bio}
            </p>
          </Col>
          <Col lg='6' md='12' className={classes.crew_img}>
            <AnimatePresence>
              <motion.img
                src={`../${images.png}`}
                alt={name}
                layout
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 200}}
              />
            </AnimatePresence>
          </Col>
          <div className={` ${classes["crew_indicators"]}`}>
            {buttons.map((item) => (
              <button
                value={item}
                onClick={changeIndexHandler}
                className={`${classes.crew_btn} ${
                  +activeIndex === item ? classes.active : ""
                }  `}
              ></button>
            ))}
          </div>
        </Row>
      </Container>
    </motion.div>
  );
}

export default CrewCarousel;
