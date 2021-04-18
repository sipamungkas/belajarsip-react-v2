import React from "react";
import PropTypes from "prop-types";

function ResetLeftSide(props) {
  const { step } = props;
  return (
    <div className="left-side">
      <img
        src={`/assets/images/ilustration/question-ilustration${"-" + step}.svg`}
        className="question-ilustration"
        alt="question ilustration"
      />
    </div>
  );
}

ResetLeftSide.propTypes = {
  step: PropTypes.string,
};

export default ResetLeftSide;
