export default function StudentItem(props) {
  const { student } = props;
  return (
    <div
      className={"member-container"}
      onClick={props.onClickHandler}
      // onClick={()=>props.onClickHandler(student.user_id)}
    >
      <img
        className={"avatar"}
        src={`/assets/images/avatars/${student.avatar || "avatar-1.png"}`}
        alt="Avatar"
      />
      <div className={"member-name"}>{student.name || "No Name"}</div>
      <div className={""}>
        <img src={"/assets/images/icons/list-icon.svg"} alt={"option"} />
      </div>
    </div>
  );
}
