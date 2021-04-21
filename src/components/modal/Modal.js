import classes from "./Modal.module.css";

export default function Modal(props) {
  return (
    <div className={classes.container}>{props.question || "Are you sure?"}</div>
  );
}
