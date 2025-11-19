import React, { useContext } from "react";
import { TasksMethods } from "../Store/TaskListContex";

const WelcomeMsg = () => {
  const { userTask } = useContext(TasksMethods);

  return (
    <>
      {userTask.length === 0 && (
        <h2 className="welcomeMsg">
          <i>"Your future is created by what you do today, not tomorrow."</i>
        </h2>
      )}
    </>
  );
};

export default WelcomeMsg;
