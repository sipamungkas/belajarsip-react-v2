import React from "react";
// import { Link } from "react-router-dom";

import classes from "./NewClassItem.module.css";

export default function NewClassItem(props) {
  const { course } = props;
  return (
    <tr>
      <td className="table-title td-truncate">{course.name ?? "Untitled"}</td>
      <td className="table-category">{course.category ?? "Uncategorized"}</td>
      <td className="td-truncate table-description">
        {course.description ?? "No Description"}
      </td>
      <td className={"table-level"}>{course.level ?? "Beginner"}</td>
      <td>{course.price === 0 ? "Free" : `$${course.price}`}</td>
      <td className={classes["table-register"]}>
        {/* <Link to={"/"} className="badge btn-register">
          Register
        </Link>{" "} */}
        <div className="badge btn-register" onClick={props.onRegister}>
          Register
        </div>
      </td>
      <td>
        <img src="/assets/images/icons/list-icon.svg" alt="list" />
      </td>
    </tr>
  );
}
