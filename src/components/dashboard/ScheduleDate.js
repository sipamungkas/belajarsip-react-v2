import { Link } from "react-router-dom";

import DateItem from "./DateItem";

export default function ScheduleDate(props) {
  const { setTabIndex, tab } = props;

  return (
    <section className={"date"}>
      <div className={"date-header"}>
        <h5 className="title">
          {/* Today, {monthname[today.month()]} {today.year()} */}
        </h5>
        <img
          src="/assets/images/icons/calendar-icon.svg"
          alt="calendar icon"
          className={"calendar-icon touchable"}
        />
      </div>
      <div className="date-body">
        {props.dateInAWeek.map((data) => (
          <DateItem
            key={data.format("D")}
            dayName={data.format("ddd")}
            date={data.date()}
            active={data.format("YYYY-MM-DD") === props.activeDate}
            onClick={() => props.setActiveDate(data.format("YYYY-MM-DD"))}
          />
        ))}
      </div>
      <Link
        to={{ pathaname: "/dashboard/for-you", state: { user: props.user } }}
        className="d-flex align-items-center justify-content-center touchable py-3 all-schedule"
      >
        <span
          className={`tab ${tab === 1 ? "active" : ""}`}
          onClick={() => setTabIndex(1)}
        >
          All schedule&nbsp;
        </span>
        <span
          className={`tab ${tab === 2 ? "active" : ""}`}
          onClick={() => setTabIndex(2)}
        >
          ForYou
        </span>
      </Link>
    </section>
  );
}
