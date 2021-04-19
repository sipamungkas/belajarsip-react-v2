import { connect } from "react-redux";

import StudentActivity from "./student/StudentActivity";
import InstructorActivity from "./instructor/InstructorActivity";

function Activity(props) {
  const { user } = props.authReducer;
  return user.role_id === 1 ? <InstructorActivity /> : <StudentActivity />;
}

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const ConnectedActivity = connect(mapStateToProps)(Activity);
export default ConnectedActivity;
