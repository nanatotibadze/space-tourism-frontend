import classes from "../../scss/navbar.module.scss";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

function NavList({className}) {
  return (
    <ul className={className}>
      <motion.li
        className={classes.li}
        whileHover={{scale: 1.1}}
        transition={{type: "spring"}}
      >
        <NavLink to='/' className={({isActive}) => (isActive ? "active" : "")}>
          <span className={classes.num}> 00 </span>
          home
        </NavLink>
      </motion.li>
      <motion.li whileHover={{scale: 1.1}} transition={{type: "spring"}}>
        <NavLink
          to='/destination'
          className={({isActive}) => (isActive ? "active" : "")}
        >
          <span className={classes.num}> 01 </span>Destination
        </NavLink>
      </motion.li>
      <motion.li whileHover={{scale: 1.1}} transition={{type: "spring"}}>
        <NavLink
          to='/crew'
          className={({isActive}) => (isActive ? "active" : "")}
        >
          <span className={classes.num}> 02 </span>crew
        </NavLink>
      </motion.li>
      <motion.li whileHover={{scale: 1.1}} transition={{type: "spring"}}>
        <NavLink
          to='/technology'
          className={({isActive}) => (isActive ? "active" : "")}
        >
          <span className={classes.num}> 03 </span>technology
        </NavLink>
      </motion.li>
    </ul>
  );
}

export default NavList;
