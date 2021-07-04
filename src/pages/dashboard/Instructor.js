import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";

// import { BASE_URL } from "../../constant";

import DashboardNews from "../../components/dashboard/DashboardNews";
import ScheduleDate from "../../components/dashboard/ScheduleDate";
import ScheduleItem from "../../components/dashboard/fasilitator/ScheduleItem";

import "./DashboardSchedule.css";
import classes from "./Instructor.module.css";
import scheduleItemClasses from "../../components/dashboard/student/ScheduleItem.module.css";

const BASE_URL = process.env.REACT_APP_API;

function Instructor(props) {
  const [activeDate, setActiveDate] = useState(moment().format("YYYY-MM-DD"));
  const { user } = props.authReducer;
  const [courseList, setCourseList] = useState([]);
  const weekStart = moment().startOf("week");
  const dateInAWeek = [weekStart];
  for (let i = 1; i < 7; i++) {
    dateInAWeek.push(moment().days(i));
  }
  // const courseList = [
  //   {
  //     title: "Introduction to Banking Finance",
  //     duration: "100 minutes",
  //     categoryIcon: "/assets/images/icons/finance-category.svg",
  //   },
  //   {
  //     title: "Trigonometry",
  //     duration: "50 minutes",
  //     categoryIcon: "/assets/images/icons/finance-category.svg",
  //   },
  //   {
  //     title: "Trigonometry",
  //     duration: "50 minutes",
  //     categoryIcon: "/assets/images/icons/finance-category.svg",
  //   },
  // ];

  useEffect(() => {
    axios
      .get(`${BASE_URL}/v1/dashboard/${activeDate}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setCourseList(res.data.data);
      })
      .catch((err) =>
        toast(
          err?.response?.data?.message ||
            err.message ||
            "internal server error",
          {
            type: "error",
          }
        )
      );
  }, [user, activeDate]);

  return (
    <>
      <DashboardNews />
      <section className={"schedule mt-3"}>
        <div className="card">
          <ScheduleDate
            setTabIndex={() => {}}
            tab={1}
            dateInAWeek={dateInAWeek}
            activeDate={activeDate}
            setActiveDate={setActiveDate}
          />

          <section className={"schedule-list"}>
            {courseList.length === 0 && (
              <div className={`${scheduleItemClasses["schedule-time"]} m-auto`}>
                <span>No Schedule</span>
              </div>
            )}
            {courseList.map((course, index) => (
              <ScheduleItem key={index} course={course} />
            ))}
            <div className={classes["add-container"]}>
              <button className={`btn ${classes["btn-add-task"]} create-class`}>
                <img
                  src={"/assets/images/icons/circle-plus-icon-white.svg"}
                  alt="add"
                  className={classes.icon}
                />
                New Task
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const ConnectedInstructor = connect(mapStateToProps)(Instructor);
export default ConnectedInstructor;
