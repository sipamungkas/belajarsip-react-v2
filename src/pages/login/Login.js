import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import InputForm from "../../components/inputForm/InputForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  eyeIconHandler = (e) => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  auth = () => {
    const { username, password } = this.state;
    if (!username || !password)
      return toast(
        "Username/Email or Password can not be empty" ||
          "Internal server Error",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "error",
        }
      );
  };

  render() {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="container d-flex flex-column align-items-center justify-content-center col-10 col-md-6 col-lg-5 col-xl-4 login-container">
          <h1>Login</h1>
          <form className={"w-100"}>
            <InputForm
              type={"text"}
              forId={"username"}
              placeholder={"Username or Email"}
              label={"Username or Email"}
              onChangeHandler={(e) =>
                this.setState({ username: e.target.value })
              }
            />

            <InputForm
              type={"password"}
              forId={"password"}
              placeholder={"Password"}
              label={"password"}
              onChangeHandler={(e) =>
                this.setState({ password: e.target.value })
              }
              additional={
                <Link
                  to="/forgot"
                  tabIndex={2}
                  className="col-12 forgot-password"
                >
                  Forgot password?
                </Link>
              }
            />
          </form>

          <div className="btn-container">
            <button
              tabIndex={2}
              className="btn-login"
              onClick={() => this.auth()}
            >
              Login
            </button>
            <div className="btn-google" tabIndex={2}>
              <img
                src="/assets/images/icons/google-icon.svg"
                alt="google icon"
              />
              Login with google
            </div>
          </div>
          <Link to="/register" className="new-user" tabIndex={2}>
            New user? <span>Register</span>
          </Link>
        </div>
      </>
    );
  }
}

export default Login;
