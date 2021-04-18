import React, { Component } from "react";
import { Link } from "react-router-dom";

import ResetLeftSide from "../../components/forgot/ResetLeftSide";
import RightResetOverlay from "../../components/forgot/ResetRightOverlay";
import InputForm from "./InputForm";

class NewPassword extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      confirmPassword: "",
      success: false,
    };
  }

  passwordValidation = (password) => {
    if (password && password.length < 8) {
      return (
        <span className="password-match text-black">
          Must be at least 8 character
        </span>
      );
    }
    return "";
  };

  passwordMatch = (password, confirmPassword) => {
    if (password && confirmPassword) {
      return (
        <span
          className={
            confirmPassword === password
              ? "password-match"
              : "password-no-match"
          }
        >
          {confirmPassword === password
            ? "Password Match"
            : "Password does not Match"}
        </span>
      );
    }
    return "";
  };

  render() {
    const { password, confirmPassword } = this.state;
    return (
      <div className="reset-container">
        <Link to="/" className="back-to-home">
          <img
            src="/assets/images/icons/back-icon.svg"
            className="back-icon"
            alt="Back Icon"
          />
        </Link>
        <ResetLeftSide step={"2"} />
        <div className="right-side">
          <h1>Create New Password</h1>
          <div>
            <h3 className="my-3">
              Your new password must be different from previous used password!
            </h3>
          </div>
          <form>
            <InputForm
              additional={this.passwordValidation(password)}
              type={"password"}
              label={"Password"}
              placeholder={"Password"}
              forId={"password"}
              onChangeHandler={(e) =>
                this.setState({ password: e.target.value })
              }
            />

            <InputForm
              additional={this.passwordMatch(password, confirmPassword)}
              type={"password"}
              label={"Confirm Password"}
              placeholder={"Confirm Password"}
              forId={"confirm-password"}
              onChangeHandler={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
            />
          </form>
          <div>
            <div className="btn-container">
              <div
                className="btn-login"
                onClick={() => this.setState({ success: !this.state.success })}
              >
                Send
              </div>
            </div>
          </div>
        </div>
        <RightResetOverlay show={this.state.success} />
      </div>
    );
  }
}

export default NewPassword;
