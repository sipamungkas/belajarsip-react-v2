import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/layouts/Layout";
import Login from "./pages/login/Login";
import Forgot from "./pages/forgot/Forgot";
import Dashboard from "./pages/dashboard/Dashboard";
import Activity from "./pages/activity/Activity";
import MyClass from "./pages/activity/student/MyClass";
import ClassDetail from "./pages/activity/ClassDetail";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <Layout>
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
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/forgot">
          <Forgot />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/activity/my-class">
          <MyClass />
        </PrivateRoute>
        <PrivateRoute path="/activity/class/:id">
          <ClassDetail />
        </PrivateRoute>
        <PrivateRoute path="/activity">
          <Activity />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
      </Switch>
    </Layout>
  );
}

export default App;
