import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";

import "./Login.css";

import InputForm from "../../components/inputForm/InputForm";

import { loginHandler } from "../../redux/actions/auth";

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

  componentDidMount() {
    const { isLoggedIn } = this.props.authReducer;
    if (isLoggedIn) return this.props.history.replace("/dashboard");
  }

  componentDidUpdate(prevProps) {
    const { isError, error, isLoggedIn } = this.props.authReducer;
    if (isLoggedIn) return this.props.history.replace("/dashboard");
    if (prevProps !== this.props) {
      if (isError) {
        return toast(
          error?.response?.data?.message ||
            error.message ||
            "internal server error",
          {
            type: "error",
          }
        );
      }
    }
  }

  auth = () => {
    const { username, password } = this.state;
    if (!username || !password) {
      return toast(
        "Username/Email or Password can not be empty" ||
          "Internal server Error",
        {
          type: "error",
        }
      );
    }
    this.props.onLoginHandler(username, password);
  };

  render() {
    const { isLoading } = this.props.authReducer;
    return (
      <>
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
              disabled={isLoading}
            >
              {isLoading ? "Loading ...." : "Login"}
            </button>
            <button className="btn-google" tabIndex={2} disabled={isLoading}>
              <img
                src="/assets/images/icons/google-icon.svg"
                alt="google icon"
              />
              Login with google
            </button>
          </div>
          <Link to="/register" className="new-user" tabIndex={2}>
            New user? <span>Register</span>
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginHandler: (username, password) =>
      dispatch(loginHandler(username, password)),
    // onLoginHandler: (user) => loginHandler(user),
  };
};

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(ConnectedLogin);
