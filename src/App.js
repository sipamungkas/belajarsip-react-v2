import { Route, Switch } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Login from "./pages/login/Login";
import Forgot from "./pages/forgot/Forgot";

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
      </Switch>
    </Layout>
  );
}

export default App;
