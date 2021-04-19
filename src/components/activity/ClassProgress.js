import React from "react";

export default function ClassProgress(props) {
  const { progressList } = props;
  return (
    <div className="card bg-white border-0 p-0 rounded-10px">
      <div className="card-body ">
        <div className="class-description-container class-progress-container">
          <div className="description">
            <div className="table-responsive mt-0">
              <table
                className="table table-borderless new-class-table progress-class-table p-1"
                style={{ borderCollapse: "separate", borderSpacing: "0 5px" }}
              >
                <tbody>
                  {progressList.map((progress, index) => (
                    <tr key={index}>
                      <th scope=" row">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          defaultChecked={
                            progress.status === "completed" ? true : false
                          }
                        />
                      </th>
                      <td>{progress.title ?? "Untitled"}</td>
                      <td
                        className={
                          progress.status === "completed"
                            ? "completed completed-progress"
                            : ""
                        }
                      >
                        {progress.status === "completed"
                          ? "You have completed this topic"
                          : `${progress.schedule.date}\n${progress.schedule.time}`}
                      </td>
                      <td>
                        <span className="score">{progress.score ?? 0}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
