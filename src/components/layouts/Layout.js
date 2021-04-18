import { useLocation } from "react-router-dom";

import classes from "./Layout.module.css";
import Sidebar from "./Sidebar";

function Layout(props) {
  const history = useLocation();
  const hidePath = ["/", "/register", "/login", "/forgot", "/reset-password"];
  console.log(history);
  return (
    <div className={classes.layout}>
      {!hidePath.includes(history.pathname) && <Sidebar />}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
