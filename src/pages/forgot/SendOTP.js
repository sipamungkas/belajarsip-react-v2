import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ResetPassword.css";
import ResetLeftSide from "./ResetLeftSide";

class SendOTP extends Component {
  constructor() {
    super();
    this.state = {
      activationCode: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ activationCode: e.target.value });
  };

  render() {
    return (
      <div className="reset-container">
        <Link to="/" className="back-to-home">
          <img
            src="/assets/images/icons/back-icon.svg"
            className="back-icon"
            alt="Back Icon"
          />
        </Link>
        <ResetLeftSide step={"1"} />
        <div className="right-side">
          <h1>Reset Password</h1>
          <div>
            <h2>Enter your email address linked to this account.</h2>
            <h3>
              We will send you the verification code to reset your password
            </h3>
          </div>
          <div>
            <div className="form-container">
              <input
                type="text"
                id="username"
                placeholder="Username or Email"
              />
              <label htmlFor="username">Username or Email</label>
            </div>
            <div className="btn-container">
              <Link to={"/reset-password/2"}>
                <div className="btn-login">Send</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SendOTP;
