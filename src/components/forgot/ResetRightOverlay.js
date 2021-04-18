import React from "react";
import { Link } from "react-router-dom";

function ResetRightOverlay(props) {
  const { show } = props;
  return (
    <div className={`right-reset-overlay ${show ? "show-overlay" : ""}`}>
      <h1>Password changed!</h1>
      <img
        src="/assets/images/ilustration/success-ilustration.svg"
        alt="Success Ilustration"
      />
      <Link to={"/"}>
        <h2>Login to your account</h2>
      </Link>
    </div>
  );
}

export default ResetRightOverlay;
