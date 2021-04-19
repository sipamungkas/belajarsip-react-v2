import DashboardNews from "../../components/dashboard/DashboardNews";
import ScheduleDate from "../../components/dashboard/ScheduleDate";
import ScheduleItem from "../../components/dashboard/student/ScheduleItem";

export default function Student(props) {
  const courseList = [
    {
      title: "Introduction to Banking Finance",
      duration: "100 minutes",
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
    {
      title: "Trigonometry",
      duration: "50 minutes",
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
  ];
  return (
    <>
      <DashboardNews />
      <section className={"schedule mt-3"}>
        <div className="card">
          <ScheduleDate setTabIndex={() => {}} tab={1} />
          <section className={"schedule-list"}>
            <ScheduleItem courseTime={"18:00"} courseList={courseList} />
            <ScheduleItem courseTime={"11:00"} courseList={courseList} />
            <ScheduleItem courseTime={"18:00"} courseList={courseList} />
          </section>
        </div>
      </section>
    </>
  );
}
