import { Route, Switch } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Login from "./pages/login/Login";
import Forgot from "./pages/forgot/Forgot";
import Dashboard from "./pages/dashboard/Dashboard";
import Activity from "./pages/activity/Activity";

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
        <Route path="/activity">
          <Activity />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
