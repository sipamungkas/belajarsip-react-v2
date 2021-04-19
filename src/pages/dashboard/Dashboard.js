import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleMessage } from "../../redux/actions/sidebar";

import Instructor from "./Instructor";
import Student from "./Student";
import MessageList from "../../components/dashboard/message/MessageList";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { showMessage } = this.props.sidebarReducer;
    const { user } = this.props.authReducer;
    const { onShowMessage } = this.props;
    return (
      <>
        <div
          className={`schedule-container ${
            // mode !== "fasilitator" ? "student" : ""
            "fasilitator"
          }`}
        >
          {user.role_id === 1 ? <Instructor /> : <Student />}
        </div>
        <MessageList
          showMessage={showMessage}
          onShowMessage={() => onShowMessage(!showMessage)}
        />
        <div className="fab-message">
          <svg
            id="chat-icon"
            className="fill-white touchable"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => onShowMessage(!showMessage)}
          >
            <path d="M19 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V21C2.00031 21.1772 2.04769 21.3511 2.1373 21.504C2.22691 21.6569 2.35553 21.7832 2.51 21.87C2.65946 21.9547 2.82821 21.9995 3 22C3.17948 21.9999 3.35564 21.9516 3.51 21.86L8 19.14C8.16597 19.0412 8.35699 18.9926 8.55 19H19C19.7956 19 20.5587 18.6839 21.1213 18.1213C21.6839 17.5587 22 16.7956 22 16V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM8 12C7.80222 12 7.60888 11.9414 7.44443 11.8315C7.27998 11.7216 7.15181 11.5654 7.07612 11.3827C7.00043 11.2 6.98063 10.9989 7.01921 10.8049C7.0578 10.6109 7.15304 10.4327 7.29289 10.2929C7.43275 10.153 7.61093 10.0578 7.80491 10.0192C7.99889 9.98063 8.19996 10.0004 8.38268 10.0761C8.56541 10.1518 8.72159 10.28 8.83147 10.4444C8.94135 10.6089 9 10.8022 9 11C9 11.2652 8.89464 11.5196 8.70711 11.7071C8.51957 11.8946 8.26522 12 8 12ZM12 12C11.8022 12 11.6089 11.9414 11.4444 11.8315C11.28 11.7216 11.1518 11.5654 11.0761 11.3827C11.0004 11.2 10.9806 10.9989 11.0192 10.8049C11.0578 10.6109 11.153 10.4327 11.2929 10.2929C11.4327 10.153 11.6109 10.0578 11.8049 10.0192C11.9989 9.98063 12.2 10.0004 12.3827 10.0761C12.5654 10.1518 12.7216 10.28 12.8315 10.4444C12.9414 10.6089 13 10.8022 13 11C13 11.2652 12.8946 11.5196 12.7071 11.7071C12.5196 11.8946 12.2652 12 12 12ZM16 12C15.8022 12 15.6089 11.9414 15.4444 11.8315C15.28 11.7216 15.1518 11.5654 15.0761 11.3827C15.0004 11.2 14.9806 10.9989 15.0192 10.8049C15.0578 10.6109 15.153 10.4327 15.2929 10.2929C15.4327 10.153 15.6109 10.0578 15.8049 10.0192C15.9989 9.98063 16.2 10.0004 16.3827 10.0761C16.5654 10.1518 16.7216 10.28 16.8315 10.4444C16.9414 10.6089 17 10.8022 17 11C17 11.2652 16.8946 11.5196 16.7071 11.7071C16.5196 11.8946 16.2652 12 16 12Z" />
          </svg>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebarReducer: state.sidebarReducer,
    authReducer: state.authReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMessage: (value) => dispatch(toggleMessage(value)),
  };
};

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
export default ConnectedDashboard;
