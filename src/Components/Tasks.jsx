import React from "react";
import { useContext } from "react";
import { TasksMethods } from "../Store/TaskListContex";
import TaskList from "./TaskList";

const Tasks = () => {
  const { userTask } = useContext(TasksMethods);

  return (
    <>
      {userTask.map((task, index) => (
        <TaskList key={index} task={task} />
      ))}
    </>
  );
};

export default Tasks;
