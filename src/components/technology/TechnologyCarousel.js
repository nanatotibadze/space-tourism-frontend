import classes from "../../scss/technology.module.scss";
import typo from "../../scss/typography.module.scss";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Container, Row, Col} from "reactstrap";
import {motion} from "framer-motion";

function TechnologyCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = useSelector((state) => state.spaceData.technology);
  const buttons = [1, 2, 3];

  function changeIndexHandler(e) {
    e.preventDefault();
    setActiveIndex(e.target.value);
  }

  const technology = items[activeIndex - 1];
  const {description, name} = technology;

  return (
    <motion.div
      className={classes.technology_slide}
      initial={{opacity: 0, y: -200}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -200}}
    >
      <Container fluid className={classes.containerFluid}>
        <Row className={classes.technology_row}>
          <Col
            lg='3'
            md='12'
            className={`${classes["technology-item"]} ${classes.carousel_indicators}`}
          >
            {buttons.map((item) => (
              <button
                key={item}
                className={`${classes.btn} ${
                  item === +activeIndex ? classes.active : classes.technologyBtn
                } `}
                value={item}
                onClick={changeIndexHandler}
              >
                {item}
              </button>
            ))}
          </Col>
          <Col lg='3' md='12' className={classes.technology_info}>
            <h4
              className={`${typo["heading-4"]} ${classes["technology_info--title"]}`}
            >
              the terminology...
            </h4>{" "}
            <h3 className={`${classes.heading} ${typo["heading-3"]}`}>
              {name}
            </h3>
            <p className={classes.technology_p}>{description}</p>
          </Col>
          <Col
            lg='3'
            md='12'
            className={`${classes["technology_img"]} ${
              classes[`technology_img--${activeIndex}`]
            }`}
          ></Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default TechnologyCarousel;
