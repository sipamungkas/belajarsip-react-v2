import DashboardNews from "../../components/dashboard/DashboardNews";

function Instructor(props) {
  return (
    <div
      className={`schedule-container ${
        // mode !== "fasilitator" ? "student" : ""
        "fasilitator"
      }`}
    >
      <DashboardNews />
      {/* <section className={"schedule mt-3"}>
        <div className="card">
          <DashboardScheduleDate
            user={props.user}
            setTabIndex={setTabIndex}
            tab={tabIndex}
          />
          <DashboardScheduleList mode={mode} tab={tabIndex} user={props.user} />
        </div>
      </section> */}
    </div>
  );
}

export default Instructor;
