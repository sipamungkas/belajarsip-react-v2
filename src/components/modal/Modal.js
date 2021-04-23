import classes from "./Modal.module.css";
import Backdrop from "../backdrop/Backdrop";

export default function Modal(props) {
  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title}>{props.title || "Warning"}</h3>
        <hr />
        <div className={classes.body}>
          {props.question || "Are you sure ?"}
          {props.withDangerButton && (
            <div className={classes["btn-container"]}>
              <button
                className="btn btn-sm btn-danger mx-3"
                onClick={props.onYesClick}
              >
                Yes
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={props.onCancelClick}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      <Backdrop />
    </>
  );
}
