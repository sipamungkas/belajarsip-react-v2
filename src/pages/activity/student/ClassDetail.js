import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import ActivityTitle from "../../../components/activity/ActivityTitle";
import ClassDescription from "../../../components/activity/ClassDescription";
import ClassProgress from "../../../components/activity/ClassProgress";

export default function ClassDetail(props) {
  const [tabIndex, setTabIndex] = useState(1);

  const { id } = useParams();
  const courseList = [
    {
      id: 1,
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "90",
      status: "completed",
      score: 88,
      cover: "class-detail-cover.png",
      progressList: [
        {
          title: "HTML Essential Training",
          status: "ongoing",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
        {
          title: "HTML Essential Training",
          status: "completed",
          score: 88,
          schedule: { date: "Friday, 6 November 2020", time: "08.00 - 09.40" },
        },
      ],
      descriptionItem: `<h3>Description</h3>
      <br />
      <p>
        Javascript from the basic for beginner. JavaScript is a programming
        language that adds interactivity to your website. This happens in games,
        in the behavior of responses when buttons are pressed or with data entry
        on forms; with dynamic styling; with animation, etc. This class helps
        you get started with JavaScript and furthers your understanding of what
        is possible.
      </p>
      <br />
      <h3>What will you learn</h3>
      <br />
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit
          tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit
          imperdiet eget posuere id sagittis.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit
          tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit
          imperdiet eget posuere id sagittis.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          blandit risus, tempor ullamcorper metus sit accumsan. Dictum sit
          tincidunt turpis malesuada arcu amet cursus blandit. Sociis diam elit
          imperdiet eget posuere id sagittis.
        </li>
      </ul>`,
    },

    {
      id: 2,
      title: "Front-end fundamentals 2",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 100,
      cover: "class-detail-cover.png",
    },

    {
      id: 3,
      title: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 88,
      cover: "class-detail-cover.png",
    },
  ];

  const renderScore = (course) => {
    if (tabIndex === 2) {
      return (
        <div className="your-score">
          <span className={""}>Your Score</span>

          <span className="score">{course.score ?? 0}</span>
        </div>
      );
    }

    return (
      <Link to={"/"} className="badge btn-register">
        Register
      </Link>
    );
  };

  const renderTabContent = (course) => {
    if (tabIndex === 2) {
      return <ClassProgress progressList={course.progressList} />;
    }
    if (tabIndex === 3) {
      return "3";
    }

    return <ClassDescription course={course} />;
  };

  const renderProgressBar = (course) => {
    if (tabIndex === 2) {
      return (
        <div className="horizontal-progress-container flex-grow-1 mb-4 mb-md-4">
          <span>{course.progress || "0"}% to complete</span>
          <div className="horizontal-background" style={{ width: "100%" }}>
            <span
              className="horizontal-progress"
              style={{ width: `${course.progress}%` }}
            ></span>
          </div>
        </div>
      );
    }
    return "";
  };

  const changeTabHandler = (tabIndex) => {
    setTabIndex(tabIndex);
  };
  const course = courseList.find((data) => data.id === parseInt(id));

  return (
    <div className="main-container">
      <ActivityTitle title={course?.title ?? "Course Not Found"} back={true} />
      <div className="card bg-white border-0 p-0 rounded-10px">
        <div className="cover">
          <img
            className={"cover-image"}
            src={`/assets/images/${course?.cover ?? "class-detail-cover.png"}`}
            height={100}
            width={100}
            alt="Cover"
          />
        </div>
        <div className="content">
          <div className="category-container bg-primary-blue">
            <img
              src="/assets/images/icons/software-category-icon.svg"
              alt="category icon"
            />
          </div>
          <div className={"course-header-wrapper"}>
            <h2 className="course-title">{course?.title ?? "Untitled"}</h2>
            <div className={"course-misc"}>
              <div className="course-level">
                Level: {course?.level ?? "Beginner"}
              </div>
              <div className="course-category">
                Category: {course?.category ?? "Uncategorized"}
              </div>
              <div className="course-price">
                Price:{" "}
                {course?.price === 0 || course?.price === undefined
                  ? "Free"
                  : `$${course.price}`}
              </div>
              {renderScore(course)}
            </div>
            {renderProgressBar(course)}
          </div>
        </div>
        <div className="tab-menu-container">
          <div
            className={`tab-menu touchable ${tabIndex === 1 ? "active" : ""}`}
            onClick={() => changeTabHandler(1)}
          >
            Information
          </div>
          <div
            className={`tab-menu touchable ${tabIndex === 2 ? "active" : ""}`}
            onClick={() => changeTabHandler(2)}
          >
            Class Progress
          </div>
          <div
            className={`tab-menu touchable ${tabIndex === 3 ? "active" : ""}`}
            onClick={() => changeTabHandler(3)}
          >
            Class Discussion
          </div>
        </div>
        {renderTabContent(course)}
      </div>
    </div>
  );
}
