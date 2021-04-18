import React, { Component } from "react";
import Instructor from "./Instructor";
// import DashboardMain from "../components/DashboardMain";

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
    // const { user } = this.props.userReducer;
    // const { user } = this.props.location.state;
    const { showMessage, showNotification } = this.state;
    // return (
    //   <>
    //     <DashboardMain
    //       mode={user.role_id === 2 ? "student" : "fasilitator"}
    //       showMessage={showMessage}
    //       onShowMessage={() => this.setShowMessage}
    //       user={user}
    //     />
    //   </>
    // );
    return <Instructor />;
  }
}

export default Dashboard;
