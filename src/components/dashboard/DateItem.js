import React from "react";

import PropTypes from "prop-types";

export default function DateBody(props) {
  const { day, dayName, active } = props;
  return (
    <div className={`date-item touchable ${active ?? ""}`}>
      <span className="day-name">{dayName ?? "--"}</span>
      <span className="day">{day ?? "00"}</span>
    </div>
  );
}

DateBody.propTypes = {
  dayName: PropTypes.string,
  day: PropTypes.string,
  active: PropTypes.string,
};
