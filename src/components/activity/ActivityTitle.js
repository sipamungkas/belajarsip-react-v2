import { Link } from "react-router-dom";

import classes from "./ActivityTitle.module.css";

export default function ActivityTitle(props) {
  return (
    <h1 className={`d-flex align-items-center ${classes.title}`}>
      {props.back ? (
        <Link
          to="/dashboard/activity"
          className={"d-flex align-items-center justify-content-center"}
        >
          <img
            className={classes["dashboard-arrow-home"]}
            src="/assets/images/icons/forward-icon.svg"
            alt="prev page"
          />
        </Link>
      ) : (
        ""
      )}

      {props.title}
    </h1>
  );
}
