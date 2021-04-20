import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { BASE_URL } from "../../constant";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import InputForm from "../../components/inputForm/InputForm";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  handlerRegister = () => {
    const { username, email, password, confirmPassword } = this.state;
    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      return toast("Please fill all required data" || "Internal server Error", {
        type: "error",
      });
    }

    axios
      .post(`${BASE_URL}/v1/auth/register`, {
        name: "user",
        username,
        email,
        password,
      })
      .then((res) => {
        return toast(res.data.message, {
          type: "success",
        });
      })
      .catch((err) => {
        return toast(err.response?.data?.message || "Internal server Error", {
          type: "error",
        });
      });
  };

  render() {
    const { password, confirmPassword } = this.state;
    return (
      <>
        <div className="container d-flex flex-column align-items-center justify-content-center col-10 col-md-6 col-lg-5 col-xl-5 register-container">
          <h1>Register</h1>
          <form className={"w-100"}>
            <InputForm
              type={"text"}
              label={"Username"}
              placeholder={"Username"}
              forId={"username"}
              onChangeHandler={(e) =>
                this.setState({ username: e.target.value })
              }
            />

            <InputForm
              type={"email"}
              label={"Email"}
              placeholder={"Email"}
              forId={"email"}
              onChangeHandler={(e) => this.setState({ email: e.target.value })}
            />

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

          <div className="btn-container">
            <div className="btn-login" onClick={() => this.handlerRegister()}>
              Register
            </div>
            <div className="btn-google">
              <img
                src={"assets/images/icons/google-icon.svg"}
                alt="google icon"
              />
              Register with google
            </div>
          </div>
          <Link to="/" className="new-user">
            Already have account? <span>Login</span>
          </Link>
        </div>
      </>
    );
  }
}
