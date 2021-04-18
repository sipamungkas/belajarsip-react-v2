import { useLocation } from "react-router-dom";

import classes from "./Layout.module.css";
import Sidebar from "./Sidebar";

function Layout(props) {
  const location = useLocation();

  const hidePath = [/register/, /login/, /forgot/, /reset-password/, /\//];
  const isMatch = hidePath.some((path) => path.test(location.pathname));
  return (
    <div className={classes.layout}>
      {!isMatch && <Sidebar />}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
