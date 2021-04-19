import { Route, Switch } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Login from "./pages/login/Login";
import Forgot from "./pages/forgot/Forgot";
import Dashboard from "./pages/dashboard/Dashboard";
import Activity from "./pages/activity/Activity";
import MyClass from "./pages/activity/student/MyClass";
import ClassDetail from "./pages/activity/ClassDetail";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/forgot">
          <Forgot />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/activity/my-class">
          <MyClass />
        </Route>
        <Route path="/activity/class/:id">
          <ClassDetail />
        </Route>
        <Route path="/activity">
          <Activity />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
