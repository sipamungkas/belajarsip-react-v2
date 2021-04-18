import { useLocation } from "react-router-dom";

import "./Layout.css";
import Sidebar from "./Sidebar";
import Notification from "../notification/Notification";
import Backdrop from "../backdrop/Backdrop";

function Layout(props) {
  const location = useLocation();
  const hidePath = [/register/, /login/, /forgot/, /reset-password/];
  const isMatch = hidePath.some((path) => path.test(location.pathname));

  return (
    <div>
      {!isMatch && <Sidebar />}
      <main>{props.children}</main>
      {/* {!isMatch && (
        <Notification onNotificationClick={() => {}} addClass={"dashboard"} />
      )} */}
      {/* {!isMatch && <Backdrop />} */}
    </div>
  );
}

export default Layout;
