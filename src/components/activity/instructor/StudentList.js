import StudentItem from "./StudentItem";

export default function StudentList(props) {
  const { students } = props;

  const renderMember = () => {
    if (!students || students.length <= 0) {
      return "No student yet";
    }
    return students.map((student, index) => (
      <StudentItem
        onClickHandler={props.onClickHandler}
        key={index}
        student={student}
      />
    ));
  };
  return (
    <div className="card bg-white border-0 p-0 rounded-10px">
      <div className="card-body ">
        <div className="class-description-container class-progress-container">
          <div className="description">{renderMember()}</div>
        </div>
      </div>
    </div>
  );
}
