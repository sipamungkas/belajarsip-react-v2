import React, { Component } from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { BASE_URL } from "../../../constant";
import MyClassItem from "../../../components/activity/MyClassItem";
import ActivityTitle from "../../../components/activity/ActivityTitle";

class MyClass extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      info: null,
      courseList: [],
      searchValue: "",
    };
  }

  searchHandler = () => {
    this.props.history.push(
      `/activity/my-class?search=${this.state.searchValue}`
    );
  };

  componentDidMount() {
    this.getMyClass();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.getMyClass();
    }
  }

  getMyClass() {
    const { user } = this.props.authReducer;
    axios(`${BASE_URL}/v1/courses/my-class${this.props.location.search}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        this.setState({ courseList: res.data.data, info: res.data.info });
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
  }

  nextPagehandler() {
    const { info, searchValue } = this.state;
    if (info.next) {
      this.props.history.push(
        `/activity/my-class?search=${searchValue}&page=${
          Number(info.current_page) + 1
        }`
      );
    }
  }

  prevPagehandler() {
    const { info, searchValue } = this.state;
    if (info.prev) {
      this.props.history.push(
        `/activity/my-class?search=${searchValue}&page=${
          Number(info.current_page) - 1
        }`
      );
    }
  }

  render() {
    const { courseList, info } = this.state;
    return (
      <div className="main-container">
        <ActivityTitle title={"My Class"} back={true} />
        <div className="card bg-transparent border-0 p-0 overflow-hidden">
          <div className="card-header bg-transparent border-0 col-12 col-md-12 col-lg-12 p-0 my-4 my-md-4 my-lg-2 ">
            <div className="d-flex flex-row justify-content-between row">
              <div className="d-flex flex-row justify-content-between align-items-center col-12 col-md-8">
                <input
                  type="text"
                  className={"form-control rounded-5px my-class-search"}
                  placeholder="Quick Search"
                  aria-label="Quick Search"
                  onChange={(e) =>
                    this.setState({ searchValue: e.target.value })
                  }
                />
                <button
                  className="btn bg-primary-blue text-xs my-0 mx-2 text-white search"
                  onClick={() => this.searchHandler()}
                >
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
                {courseList.map((course, index) => (
                  <MyClassItem
                    key={index}
                    onClickHandler={() =>
                      this.props.history.push({
                        pathname: `/activity/class/${course?.id ?? ""}`,
                      })
                    }
                    course={course}
                  />
                ))}
              </tbody>
            </table>
            <div className="pagination-container d-flex flex-row justify-content-between align-items-center">
              <span className="w-100">
                Showing{" "}
                {info?.current_page === info?.total_page
                  ? info?.total
                  : courseList.length / info?.current_page}{" "}
                out of {info?.total || 0}
              </span>
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

const ConnectedMyClass = connect(mapStateToProps)(MyClass);
export default withRouter(ConnectedMyClass);
