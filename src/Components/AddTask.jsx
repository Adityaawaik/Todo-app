import React from "react";

const AddTask = ({ activeTab, setActiveTab }) => {
  const time = new Date().getHours();

  const handleChangeTab = () => {
    setActiveTab(!activeTab);
  };

  return (
    <>
      <div className="user-task-container">
        <div className="user-task-handler">
          <div className="task-controller">
            <h2 className="greeting">
              {time >= 12 && time < 17
                ? "Good Afternoon Master"
                : time >= 17 && time <= 23
                ? "Good Evening Master "
                : "Good Morning Master"}
            </h2>

            <div className="add-task-container">
              <button onClick={handleChangeTab} className="add-task">
                Add your Task{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
