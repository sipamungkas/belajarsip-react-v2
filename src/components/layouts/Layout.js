import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

import { toggleNotification } from "../../redux/actions/sidebar";

import "react-toastify/dist/ReactToastify.min.css";
import "./Layout.css";
import Sidebar from "./Sidebar";
import Notification from "../notification/Notification";
import Backdrop from "../backdrop/Backdrop";

function Layout(props) {
  const location = useLocation();
  const hidePath = [/register/, /login/, /forgot/, /reset-password/, /\/$/];
  const isMatch = hidePath.some((path) => path.test(location.pathname));
  if (isMatch) {
    return (
      <>
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
        {props.children}
      </>
    );
  }
  const { showNotification } = props.sidebarReducer;
  const { onShowNotification } = props;
  return (
    <div>
      <Sidebar
        onNotificationClick={() => onShowNotification(!showNotification)}
      />
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
      <main className={isMatch ? "w-100" : ""}>{props.children}</main>
      {showNotification && (
        <Notification
          onClick={() => onShowNotification(!showNotification)}
          addClass={"dashboard"}
        />
      )}
      {showNotification && <Backdrop />}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    sidebarReducer: state.sidebarReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowNotification: (value) => dispatch(toggleNotification(value)),
  };
};

const ConnectedLayout = connect(mapStateToProps, mapDispatchToProps)(Layout);
export default ConnectedLayout;
