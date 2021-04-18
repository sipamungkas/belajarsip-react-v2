import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResetLeftSide from "../../components/forgot/ResetLeftSide";

class OTPVerification extends Component {
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
        <ResetLeftSide step={"2"} />
        <div className="right-side">
          <h1>Reset Password</h1>
          <div>
            <h2 className="mt-5">
              Enter verification code we just sent to your email address
            </h2>
          </div>
          <div>
            <div>
              <div className="form-container d-flex flex-row justify-content-between align-items-center px-3">
                <input
                  maxLength={1}
                  tabIndex={1}
                  className="activation-code"
                  type="text"
                />
                <input
                  maxLength={1}
                  tabIndex={1}
                  className="activation-code"
                  type="text"
                />
                <input
                  maxLength={1}
                  tabIndex={1}
                  className="activation-code"
                  type="text"
                />
                <input
                  maxLength={1}
                  tabIndex={1}
                  className="activation-code"
                  type="text"
                />
              </div>
              <div className="resend">
                Didn’t receive a code? <span>Resend</span>
              </div>
            </div>
            <div className="btn-container">
              <Link to={"/reset-password/3"}>
                <div className="btn-login">Send</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OTPVerification;
