import React from "react";
import PropTypes from "prop-types";

export default function MyClassFasilitatorItem(props) {
  const { course } = props;

  return (
    <tr
      className={course.score === 100 ? "perfect" : ""}
      onClick={props.onClickHandler}
    >
      <th scope=" row">
        <input type="checkbox" name="" id="" />
      </th>
      <td className="table-title td-truncate">{course.name ?? "Untitled"}</td>
      <td className="table-category">{course.category ?? "Uncategorized"}</td>
      <td className="td-truncate table-description">
        {course.description ?? "No Description"}
      </td>
      <td className={"schedule"}>{`${course?.day || ""}, ${
        course?.session_start ?? "00:00:00"
      }`}</td>
      <td>
        <span className="students">
          {course.students ?? 0}{" "}
          <img src="/assets/images/icons/student-icon.svg" alt="students" />
        </span>
      </td>
      <td>
        <img
          src="/assets/images/icons/list-icon.svg"
          className="touchable"
          alt="list"
        />
      </td>
    </tr>
  );
}

MyClassFasilitatorItem.propTypes = {
  course: PropTypes.object,
};
