import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

import { BASE_URL } from "../../constant";

import DashboardNews from "../../components/dashboard/DashboardNews";
import ScheduleDate from "../../components/dashboard/ScheduleDate";
import ScheduleItem from "../../components/dashboard/fasilitator/ScheduleItem";

import "./DashboardSchedule.css";
import classes from "./Instructor.module.css";

function Instructor(props) {
  const { user } = props.authReducer;
  const [courseList, setCourseList] = useState([]);

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
      .get(`${BASE_URL}/v1/dashboard/2021-03-29`, {
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
  }, [user]);

  return (
    <>
      <DashboardNews />
      <section className={"schedule mt-3"}>
        <div className="card">
          <ScheduleDate user={props.user} setTabIndex={() => {}} tab={1} />
          <section className={"schedule-list"}>
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
