import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashboardMain";

import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      showNotification: false,
    };
  }

  setShowMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  setShowNotification = () => {
    this.setState({ showNotification: !this.state.showNotification });
  };

  render() {
    const { user } = this.props.userReducer;
    // const { user } = this.props.location.state;
    const { showMessage, showNotification } = this.state;
    return (
      <>
        <Sidebar
          onShowMessage={() => this.setShowMessage}
          user={user}
          onNotificationClick={() => this.setShowNotification}
        />
        <DashboardMain
          mode={user.role_id === 2 ? "student" : "fasilitator"}
          showMessage={showMessage}
          onShowMessage={() => this.setShowMessage}
          user={user}
        />
        {showNotification && (
          <Notification
            onNotificationClick={() => this.setShowNotification}
            addClass={"dashboard"}
          />
        )}
        {showNotification && <Backdrop />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
export default ConnectedDashboard;
