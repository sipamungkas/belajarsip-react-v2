import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ authReducer, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authReducer.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);

export default ConnectedPrivateRoute;
