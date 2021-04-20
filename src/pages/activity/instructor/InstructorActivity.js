import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

import { BASE_URL } from "../../../constant";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./InstructorActivity.css";

import ActivityTitle from "../../../components/activity/ActivityTitle";

import MyClassItem from "../../../components/activity/instructor/MyClassItem";
import { useHistory } from "react-router";

function InstrcutorActivity(props) {
  const history = useHistory();
  const [courseList, setCourseList] = useState([]);
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState(1);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const { user } = props.authReducer;

  useEffect(() => {
    axios(`${BASE_URL}/v1/courses/my-class?limit=3`, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        setCourseList(res.data.data);
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

    axios(`${BASE_URL}/v1/categories`, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then((res) => {
        setCategories(res.data.data);
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
  }, [user]);

  function createCourseHandler() {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("level", 1);
    formData.append("start_date", "2021-04-20");
    formData.append("session_start", "09:00:00");
    formData.append("duration", "6000000");
    formData.append("day", 3);
    axios
      .post(`${BASE_URL}/v1/courses`, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        return toast(res.data.message, { type: "success" });
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
    console.log(formData, name, category, image);
  }

  return (
    <div className="main-container">
      <ActivityTitle title={"Activity"} back={false} />
      <div className="card bg-transparent border-0 p-0">
        <div className="card-header bg-transparent border-0">My Class</div>
        <div className="card-body p-0 mt-0">
          <div className="table-responsive">
            <table className="table table-borderless my-class-table fasilitator">
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
                  <th scope="col">Schedule</th>
                  <th scope="col">Students</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {courseList.map((course, index) => (
                  <MyClassItem
                    key={index}
                    course={course}
                    onClickHandler={() =>
                      history.push({
                        pathname: `/activity/class/${course.id}`,
                      })
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            {/* <Link to="/dashboard/activity/my-class"> */}
            <span className="view-all touchable">
              view all{" "}
              <img
                src="/assets/images/icons/forward-icon.svg"
                width="12"
                height="12"
                alt="view all"
              />
            </span>
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className="card bg-transparent border-0 p-0">
        <div className="card-header bg-transparent border-0">
          Create New Class
        </div>
        <div className="card-body bg-white p-0 mt-0">
          <div className="form-activity ">
            <div className="row">
              <div className={"form-side col-12 col-lg-5"}>
                <div className="form-row">
                  Class Name :{" "}
                  <input
                    type="text"
                    className={"activity-input w-50"}
                    placeholder={"Your class name"}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  Category :
                  <select onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((category) => (
                      <option value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  Course Image :
                  <input
                    type="file"
                    name=""
                    id=""
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </div>
              <div className={"form-side col-12 col-lg-7"}>
                <div className={"form-row"}>
                  Pricing :{" "}
                  <div className="form-check form-check-inline mx-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="0"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Free
                    </label>
                  </div>
                  <div className="form-check form-check-inline mx-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="Paid"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Paid
                    </label>
                  </div>
                </div>
                <div className="d-flex form-row">
                  Schedule :{" "}
                  <select onChange={(e) => console.log(e)}>
                    <option value="0">Sunday</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                    <option value="6">Saturday</option>
                    <option value="7">Sunday</option>
                  </select>
                  <div className={"form-row w-50 mx-2"}>
                    <input
                      type="text"
                      className={"activity-input w-25"}
                      placeholder={"00:00"}
                    />
                    <input
                      type="text"
                      className={"activity-input w-25"}
                      placeholder={"00:00"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <textarea
              className={"activity-text-area"}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea> */}
            <CKEditor
              editor={ClassicEditor}
              data="<p>Class Description!</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
            <div className="button-create-class">
              <button
                className={"btn btn-register my-1 create-class"}
                onClick={() => createCourseHandler()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const ConnectedInstrcutorActivity = connect(mapStateToProps)(
  InstrcutorActivity
);
export default ConnectedInstrcutorActivity;
