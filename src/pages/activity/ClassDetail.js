import { connect } from "react-redux";

import "./ClassDetail.css";

import StudentClassDetail from "./student/ClassDetail";
import InstructorClassDetail from "./instructor/ClassDetail";

function ClassDetail(props) {
  const { user } = props.userReducer;
  return user.role_id === 1 ? (
    <InstructorClassDetail />
  ) : (
    <StudentClassDetail />
  );
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const ConnectedClassDetail = connect(mapStateToProps)(ClassDetail);
export default ConnectedClassDetail;
