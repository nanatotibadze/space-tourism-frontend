import styles from "../../scss/style.module.css";
import classes from "../../scss/navbar.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/shared/logo.svg";
import toggleIcon from "../../assets/shared/icon-hamburger.svg";
import closeButton from "../../assets/shared/icon-close.svg";
import {Container} from "react-bootstrap";
import {useState} from "react";
import NavList from "./NavList";

function MainNavigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      expand='md'
      className={`${classes.navbar} ${styles["navbar-expand-md"]}`}
    >
      <Container fluid className={classes["container-fluid"]}>
        <Navbar.Brand className={styles["navbar-brand"]}>
          <div className={classes["navbar-brand_icon"]}>
            <img src={logo} alt='logo' />
          </div>
          <hr className={styles.navbar_line} />
        </Navbar.Brand>

        <Navbar.Toggle
          data-bs-toggle='collapse'
          data-bs-target='navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          expand='md'
          placement='end'
        >
          <button
            type='button'
            onClick={handleShow}
            className={classes.toggleButton}
          >
            <img
              src={toggleIcon}
              alt='toggle-icon'
              className={classes["navbar-toggler-icon"]}
            ></img>{" "}
          </button>
        </Navbar.Toggle>

        <Navbar.Collapse id='navbarNav' className={classes.navCollapse}>
          <NavList
            className={`${styles["navbar-nav"]} ${styles["justify-content-end"]} ${classes.navbar_navigation}`}
          ></NavList>
        </Navbar.Collapse>

        <Offcanvas
          show={show}
          backdrop={false}
          placement='end'
          className={classes.offcanvas}
          scroll={false}
        >
          <Offcanvas.Header>
            <button onClick={handleClose} className={classes.closeButton}>
              <img src={closeButton} alt='close-button'></img>
            </button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavList className={classes.offcanvas_list} />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
