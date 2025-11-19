import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TasksMethods } from "../Store/TaskListContex";

const UserTaskForm = ({ activeTab, setActiveTab }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const { addTask } = useContext(TasksMethods);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDateChange = (e) => {
    setTaskDate(e.target.value);
  };

  const handleTaskPriority = (e) => {
    setTaskPriority(e.target.value);
  };

  const newTask = (e) => {
    e.preventDefault();
    if (taskName && taskDate && taskPriority) {
      setActiveTab(!activeTab);
      addTask(taskName, taskDate, taskPriority);
      setTaskDate("");
      setTaskName("");
      setTaskPriority("Select Priority");
    }
  };

  const handleChangeTab = (e) => {
    e.preventDefault();
    setActiveTab(!activeTab);
  };

  return (
    <>
      <div className="task-form-container">
        <div className="task-form">
          <form action="">
            <div className="user-task-information">
              <div className="user-taskname-taskdate-container">
                <div className="user-task-name">
                  <label htmlFor="task-name">Task Title : </label>
                  <br />
                  <input
                    type="text"
                    name="taskName"
                    id="task-name"
                    placeholder="Add your Title"
                    onChange={handleTaskNameChange}
                    value={taskName}
                  />
                </div>

                <div className="user-task-date">
                  <label htmlFor="task-date">Task Date : </label>
                  <br />
                  <input
                    type="date"
                    name="taskDate"
                    id="task-date"
                    onChange={handleTaskDateChange}
                    value={taskDate}
                  />
                </div>
              </div>

              <div className="user-task-opts">
                <label htmlFor="options">Select Priority : </label>
                <br />
                <select
                  onChange={handleTaskPriority}
                  name="option"
                  id="options"
                  value={taskPriority}
                >
                  <option value="priority">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="update-task-container">
                <button onClick={newTask} className="update-task">
                  Add Task
                </button>
              </div>
              <div className="close-btn-container">
                <button onClick={handleChangeTab} className="close-btn">
                  <IoMdClose />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserTaskForm;
