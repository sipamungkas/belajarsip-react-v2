import { useState, useEffect } from "react";

import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import { connect } from "react-redux";

import DashboardNews from "../../components/dashboard/DashboardNews";
import ScheduleDate from "../../components/dashboard/ScheduleDate";
import ScheduleItem from "../../components/dashboard/student/ScheduleItem";

import classes from "../../components/dashboard/student/ScheduleItem.module.css";

const BASE_URL = process.env.REACT_APP_API;

function Student(props) {
  const [activeDate, setActiveDate] = useState(moment().format("YYYY-MM-DD"));
  const [schedule, setSchedule] = useState([]);
  const weekStart = moment().startOf("week");
  const dateInAWeek = [weekStart];
  for (let i = 1; i < 7; i++) {
    dateInAWeek.push(moment().days(i));
  }

  const arrayOfStartTime = [];
  for (const course of schedule) {
    if (!arrayOfStartTime.includes(course.start_at)) {
      arrayOfStartTime.push(course.start_at);
    }
  }

  const groupedByTime = [];

  for (const startTime of arrayOfStartTime) {
    groupedByTime.push({
      startAt: startTime,
      courseList: schedule.filter((course) => course.start_at === startTime),
    });
  }

  const { user } = props.authReducer;

  useEffect(() => {
    axios(`${BASE_URL}/v1/dashboard/${activeDate}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        setSchedule(res.data.data);
      })
      .catch((err) => {
        return toast(
          err?.response?.data?.message ||
            err.message ||
            "internal server error",
          {
            type: "error",
          }
        );
      });
  }, [activeDate, user]);

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
            {groupedByTime.length === 0 ? (
              <div className={`${classes["schedule-time"]} my-4`}>
                <span>No Schedule</span>
              </div>
            ) : (
              ""
            )}
            {groupedByTime.map((data) => (
              <ScheduleItem
                key={data.startAt}
                courseTime={data.startAt}
                courseList={data.courseList}
              />
            ))}
            {groupedByTime.length > 0 && (
              <div className={classes["schedule-time"]}>
                <span>Finish</span>
              </div>
            )}
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

const ConnectedStudent = connect(mapStateToProps)(Student);
export default ConnectedStudent;
