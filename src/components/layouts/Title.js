import classes from "../../scss/base.module.scss";
import typo from "../../scss/typography.module.scss";

function Title(props) {
  return (
    <div className={classes.title}>
      <h5 className={typo["heading-5"]}>
        <span className={typo["num-text"]}> {props.num}</span>
        {props.text}
      </h5>
    </div>
  );
}

export default Title;
