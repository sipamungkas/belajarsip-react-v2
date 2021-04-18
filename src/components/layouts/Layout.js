import { useLocation } from "react-router-dom";

import classes from "./Layout.module.css";
import Sidebar from "./Sidebar";
import Notification from "../notification/Notification";
import Backdrop from "../backdrop/Backdrop";

function Layout(props) {
  const location = useLocation();
  const hidePath = [/register/, /login/, /forgot/, /reset-password/];
  const isMatch = hidePath.some((path) => path.test(location.pathname));

  return (
    <div className={classes.layout}>
      {!isMatch && <Sidebar />}
      <main className={classes.main}>{props.children}</main>
      {/* {!isMatch && (
        <Notification onNotificationClick={() => {}} addClass={"dashboard"} />
      )} */}
      {/* {!isMatch && <Backdrop />} */}
    </div>
  );
}

export default Layout;
