import React, { useContext } from "react";
import { TasksMethods } from "../Store/TaskListContex";
import { MdDone } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const TaskList = ({ task }) => {
  const { deleteTask, toggleCompletion } = useContext(TasksMethods);

  return (
    <>
      <div className="user-task-information-content">
        <div
          className={`task-content ${
            task.taskCompleted && "task-completed-active"
          }
          ${task.taskPriority === "High" && "priority-high"}
          ${task.taskPriority === "Low" && "priority-low"}
          ${task.taskPriority === "Medium" && "priority-medium"}
          `}
        >
          <div className="task-title">
            <textarea
              name=""
              id=""
              disabled
              //   readOnly
              value={task.taskName}
              className="task-area"
            ></textarea>
          </div>

          <div className="task-date-priority-container">
            <div className="task-title-date">
              <p className="user-task-title">{task.taskDate}</p>
            </div>

            <div className="task-priority-content">
              <p className="user-task-priority-order">{task.taskPriority}</p>
            </div>
          </div>

          <div className="task-handler">
            <button
              onClick={() => toggleCompletion(task.id)}
              type="button"
              className={`task-completed ${
                task.taskCompleted && "task-completed-active"
              }`}
            >
              <MdDone />
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              type="button"
              className="delete-task"
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
