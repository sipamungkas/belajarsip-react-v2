import React, { Component } from "react";
import MyClassItem from "../../../components/activity/MyClassItem";
import ActivityTitle from "../../../components/activity/ActivityTitle";

export default class MyClass extends Component {
  constructor() {
    super();
    this.state = {
      showMessage: false,
      showNotification: false,
    };
  }

  courseList = [
    {
      id: 1,
      name: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 88,
    },
    {
      id: 2,
      name: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 100,
    },

    {
      id: 3,
      name: "Front-end fundamentals",
      category: "Software",
      description: "Learn the fundamentals of front end...",
      progress: "80",
      status: "ongoing",
      score: 88,
    },
  ];

  render() {
    return (
      <div className="main-container">
        <ActivityTitle title={"My Class"} back={true} />
        <div className="card bg-transparent border-0 p-0">
          <div className="card-header bg-transparent border-0 col-12 col-md-12 col-lg-12 p-0 my-4 my-md-4 my-lg-2 ">
            <div className="d-flex flex-row justify-content-between row">
              <div className="d-flex flex-row justify-content-between align-items-center col-12 col-md-8">
                <input
                  type="text"
                  className={"form-control rounded-5px my-class-search"}
                  placeholder="Quick Search"
                  aria-label="Quick Search"
                />
                <button className="btn bg-primary-blue text-xs my-0 mx-2 text-white search">
                  Search
                </button>
              </div>
              <div className="col-12 col-md-4">
                <div className="sort-by-container float-start float-md-end float-lg-end my-2 my-md-0 my-lg-0 rounded-5px px-2">
                  <span className="sort-by-text border-0 w-100">sort by:</span>
                  <select className="border-0 bg-transparent" name="" id="">
                    <option value="">All Categories</option>
                    <option value="">Price</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-0 mt-4">
            <table className="table table-borderless my-class-table">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th scope="col">Class Name</th>
                  <th scope="col" className="table-category">
                    Category
                  </th>
                  <th
                    scope="col"
                    className="table-description"
                    style={{ maxWidth: "25%" }}
                  >
                    Description
                  </th>
                  <th scope="col">Progress</th>
                  <th scope="col" className="table-status">
                    Status
                  </th>
                  <th scope="col">Score</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.courseList.map((course, index) => (
                  <MyClassItem
                    key={index}
                    onClickHandler={() =>
                      this.props.history.push({
                        pathname: `/dashboard/activity/my-class/${
                          course?.id ?? ""
                        }`,
                      })
                    }
                    course={course}
                  />
                ))}
              </tbody>
            </table>
            <div className="pagination-container d-flex flex-row justify-content-between align-items-center">
              <span className="w-100">Showing 10 out of 64</span>
              <div className="d-flex flex-row justify-content-evenly">
                <div className="table-page touchable">
                  <img
                    className="rotate-180"
                    src="/assets/images/icons/forward-icon.svg"
                    alt=""
                  />
                </div>
                <div className={"page-number "}>
                  <span className="table-page touchable active">1</span>
                  <span className="table-page touchable">2</span>
                  <span className="table-page touchable">3</span>
                  <span className="table-page touchable">4</span>
                  <span className="table-page touchable">5</span>
                </div>

                <div className="table-page touchable">
                  <img src="/assets/images/icons/forward-icon.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
