import { Route, Switch } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
