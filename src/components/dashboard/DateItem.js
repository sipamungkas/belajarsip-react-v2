import React from "react";

import PropTypes from "prop-types";

export default function DateBody(props) {
  const { date, dayName, active } = props;
  return (
    <div
      className={`date-item touchable ${active ? "active" : ""}`}
      onClick={props.onClick}
    >
      <span className="day-name">{dayName?.slice(0, 2) ?? "--"}</span>
      <span className="day">{date ?? "00"}</span>
    </div>
  );
}

DateBody.propTypes = {
  dayName: PropTypes.string,
  date: PropTypes.number,
  active: PropTypes.bool,
};
