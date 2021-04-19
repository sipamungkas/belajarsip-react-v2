import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import "./StudentActivity.css";
import MyClassItem from "../../../components/activity/MyClassItem";
import NewClassItem from "../../../components/activity/NewClassItem";
import ActivityTitle from "../../../components/activity/ActivityTitle";

import { BASE_URL } from "../../../constant";
import { toast } from "react-toastify";

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      info: null,
      courseList: [],
      newCourseList: [],
      searchValue: "",
      sort: "",
    };
  }

  searchHandler = () => {
    this.props.history.push(
      `/activity?search=${this.state.searchValue}&sort=${this.state.sort}`
    );
  };

  componentDidMount() {
    const { user } = this.props.authReducer;
    axios(`${BASE_URL}/v1/courses/my-class?limit=3`, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        this.setState({ courseList: res.data.data });
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
    this.getNewClass();
  }

  getNewClass() {
    const { user } = this.props.authReducer;
    axios(`${BASE_URL}/v1/courses${this.props.location.search}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        const availableCourses = res.data.data.filter(
          (course) =>
            !this.state.courseList.filter(
              (registered) => registered.id === course.id
            ).length
        );
        this.setState({
          newCourseList: availableCourses,
          info: res.data.info,
        });
      })
      .catch((err) => {
        console.log(err);
        return toast(
          err?.response?.data?.message ||
            err.message ||
            "internal server error",
          {
            type: "error",
          }
        );
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.getNewClass();
    }
  }

  nextPagehandler() {
    const { info, searchValue, sort } = this.state;
    if (info.next) {
      this.props.history.push(
        `/activity?search=${searchValue}&sort=${sort}&page=${
          Number(info.current_page) + 1
        }`
      );
    }
  }

  prevPagehandler() {
    const { info, searchValue, sort } = this.state;
    if (info.prev) {
      this.props.history.push(
        `/activity?search=${searchValue}&sort=${sort}&page=${
          Number(info.current_page) - 1
        }`
      );
    }
  }

  render() {
    const { user } = this.props;
    const { courseList, newCourseList, info } = this.state;
    return (
      <div className="main-container">
        <ActivityTitle title={"Activity"} back={false} />
        <div className="card bg-transparent border-0 p-0">
          <div className="card-header bg-transparent border-0">My Class</div>
          <div className="card-body p-0 mt-0">
            <div className="table-responsive">
              <table className="table table-borderless my-class-table">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th scope="col" className="table-title">
                      Class Name
                    </th>
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
                  {courseList.map((course, index) => (
                    <MyClassItem key={index} course={course} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Link
                to={{
                  pathname: "/activity/my-class",
                  state: { user },
                }}
              >
                <span className="view-all touchable">
                  view all{" "}
                  <img
                    src="/assets/images/icons/forward-icon.svg"
                    width="12"
                    height="12"
                    alt="view all"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="card border-0 p-0 mt-4 mt-md-5 col-12 rounded-10px">
          <div className="card-header bg-transparent border-0 my-2">
            New Class
          </div>
          <div className="card-body mt-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control col-12"
                placeholder="Quick Search"
                aria-label="Quick Search"
                aria-describedby="button-addon2"
                onChange={(e) => this.setState({ searchValue: e.target.value })}
              />
              <button
                className="btn bg-primary-blue text-white text-xs"
                type="button"
                id="button-addon2"
                onClick={() => this.searchHandler()}
              >
                Search
              </button>
            </div>
            <div className="mt-0 col-12 search-filter mb-3">
              <select
                name="category"
                id="category"
                onChange={(e) => {
                  this.setState({ sort: e.target.value });
                }}
              >
                <option value="">Categories</option>
                <option value="category-az">Category A-Z</option>
                <option value="category-za">Category Z-A</option>
              </select>
              <select
                name="level"
                id="level"
                onChange={(e) => {
                  this.setState({ sort: e.target.value });
                }}
              >
                <option value="">Level</option>
                <option value="level-az">Lowest Level</option>
                <option value="level-za">Highest Level</option>
              </select>
              <select
                name="pricing"
                id="pricing"
                onChange={(e) => {
                  this.setState({ sort: e.target.value });
                }}
              >
                <option value="">Pricing</option>
                <option value="price-az">Lowest Price</option>
                <option value="price-za">Highest Price</option>
              </select>
            </div>
            <div className={"table-responsive"}>
              <table
                className="table table-borderless new-class-table p-2"
                style={{ borderCollapse: "separate", borderSpacing: "0 5px" }}
              >
                <thead>
                  <tr>
                    <th scope="col" className="table-title">
                      Class Name
                    </th>
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
                    <th scope="col" className={"table-level"}>
                      Level
                    </th>
                    <th scope="col">Pricing</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {newCourseList.map((course, index) => (
                    <NewClassItem key={index} course={course} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pagination-container d-flex flex-row justify-content-between align-items-center">
              <span className="w-100">Showing 10 out of 64</span>
              <div className="d-flex flex-row justify-content-evenly">
                <div
                  className={`table-page ${info?.prev ? "touchable" : ""}`}
                  onClick={() => this.prevPagehandler()}
                >
                  <img
                    className="rotate-180"
                    src="/assets/images/icons/forward-icon.svg"
                    alt=""
                  />
                </div>
                <div className={"page-number "}>
                  {/* <span className="table-page touchable active">1</span>
                  <span className="table-page touchable">2</span>
                  <span className="table-page touchable">3</span>
                  <span className="table-page touchable">4</span>
                  <span className="table-page touchable">5</span> */}
                </div>

                <div
                  className={`table-page ${info?.next ? "touchable" : ""}`}
                  onClick={() => this.nextPagehandler()}
                >
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

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const ConnectedActivity = connect(mapStateToProps)(Activity);
export default withRouter(ConnectedActivity);
