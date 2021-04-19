import React from "react";
import PropTypes from "prop-types";

export default function MyClassItem(props) {
  const { course } = props;
  console.log(course);
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
      <td>
        <div className="single-chart m-0">
          <svg viewBox="0 0 36 36" className="circular-chart blue m-0">
            <path
              className="circle-bg"
              d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${course.progress ?? 0}, 100`}
              d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="21" className="percentage">
              {`${course.progress ?? "0"}%`}
            </text>
          </svg>
        </div>
      </td>
      <td className="table-status">
        <span
          className={` badge badge-${
            course?.status ?? "ongoing"
          } p-2 rounded-15px`}
        >
          {course?.progress !== 100 ? "Ongoing" : "Completed"}
        </span>
      </td>
      <td>
        <span className="score">{course.score ?? 0}</span>
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

MyClassItem.propTypes = {
  course: PropTypes.object,
};
