import React from "react";
import PropTypes from "prop-types";

import classes from "./ScheduleItem.module.css";

export default function FasilitatorScheduleItem(props) {
  const { course } = props;
  return (
    <div className={classes.item}>
      <div className={classes["course-time"]}>
        {course.start_at ?? "00.00-00.00"}
      </div>
      <div className={`${classes["course-title"]} text-truncate`}>
        {course.title ?? "No Title"}
      </div>
      <div className={classes["student-count"]}>
        {course.students ?? 0}{" "}
        <img
          src={"/assets/images/icons/student-icon.svg"}
          alt={course.title ?? "course title"}
        />
      </div>
    </div>
  );
}

FasilitatorScheduleItem.propTypes = {
  course: PropTypes.object,
};
