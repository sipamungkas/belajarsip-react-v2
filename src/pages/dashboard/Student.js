import DashboardNews from "../../components/dashboard/DashboardNews";
import ScheduleDate from "../../components/dashboard/ScheduleDate";
import ScheduleItem from "../../components/dashboard/student/ScheduleItem";

export default function Student(props) {
  const courseList = [
    {
      title: "Introduction to Banking Finance",
      duration: 3000000,
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
  ];
  const courseList2 = [
    {
      title: "Javascript",
      duration: 9000000,
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
    {
      title: "Introduction to Banking Finance",
      duration: 1000000,
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
  ];

  const courseList3 = [
    {
      title: "Introduction ",
      duration: 6000000,
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
    {
      title: "Introduction to Banking Finance",
      duration: 6000000,
      categoryIcon: "/assets/images/icons/finance-category.svg",
    },
    {
      title: "Introduction to Banking Finance",
      duration: 6000000,
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
            <ScheduleItem courseTime={"11:00"} courseList={courseList2} />
            <ScheduleItem courseTime={"18:00"} courseList={courseList3} />
          </section>
        </div>
      </section>
    </>
  );
}
