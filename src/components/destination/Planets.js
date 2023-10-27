import classes from "../../scss/destination.module.scss";
import typo from "../../scss/typography.module.scss";
import {Container, Col, Row} from "reactstrap";
import {useSelector} from "react-redux";
import {useState} from "react";
import {motion} from "framer-motion";

function PlanetsList() {
  const [planetName, setPlanetName] = useState(`Moon`);
  const navHandler = function (e) {
    setPlanetName(e.currentTarget.value);
  };
  const destinations = useSelector((state) => state.spaceData.destinations);
  const planetItem = destinations.filter((item) => item.name === planetName);

  const [{name, description, images, distance, travel}] = planetItem;

  return (
    <Container className={classes.planet}>
      <Row>
        <Col lg='6' md='12' className={classes.planet_img_container}>
          <motion.img
            src={`../${images.png}`}
            alt=''
            className={classes.planet_img}
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 200}}
          />
        </Col>

        <Col lg='6' md='12' className={classes.planet_intro}>
          <motion.div
            className={classes.planet_list}
            initial={{opacity: 0, y: 200}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 200}}
          >
            <motion.ul
              className={classes.planet_ul}
              variants={{visible: {transition: {staggerChildren: 0.08}}}}
            >
              {destinations.map((item) => (
                <li className={classes.planet_li} key={item.name}>
                  <motion.button
                    type='button'
                    className={classes.planet_btn}
                    value={item.name}
                    onClick={navHandler}
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring"}}
                    variants={{
                      hidden: {opacity: 0, scale: 0.5},
                      visible: {opacity: 1, scale: [0.8, 1.3, 1]},
                    }}
                    exit={{opacity: 1, scale: 1}}
                  >
                    {" "}
                    <span
                      className={item.name === planetName ? classes.active : ""}
                    >
                      {" "}
                      {item.name}
                    </span>
                  </motion.button>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.h2
            className={`${typo["heading-2"]} classes.planet_title`}
            initial={{scale: 0.8}}
            animate={{scale: 1}}
            exit={{scale: 0.8}}
          >
            {name}
          </motion.h2>
          <motion.p
            className={classes.planet_description}
            initial={{scale: 0.8}}
            animate={{scale: 1}}
            exit={{scale: 0.8}}
          >
            {description}
          </motion.p>

          <div className={classes.planet_footer}>
            <div>
              <p className={classes["planet_footer--text"]}>avg. distance</p>
              <h6 className={typo["heading-6"]}>{distance}</h6>
            </div>

            <div>
              <p className={classes["planet_footer--text"]}>est. travel time</p>
              <h6 className={typo["heading-6"]}>{travel}</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PlanetsList;
