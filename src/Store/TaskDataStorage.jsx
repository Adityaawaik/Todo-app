import { useState } from "react";
import { TasksMethods } from "./TaskListContex";
import { useEffect } from "react";

const valueStorage = JSON.parse(localStorage.getItem("allTasks") || "[]");

const TaskListProvider = ({ children }) => {
  const [userTask, setUserTask] = useState(valueStorage);

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(userTask));
  }, [userTask]);

  const addTask = (taskName, taskDate, taskPriority) => {
    const userNewTask = [
      {
        taskName,
        taskDate,
        taskPriority,
        taskCompleted: false,
        id: crypto.randomUUID(),
      },
      ...userTask,
    ];
    setUserTask(userNewTask);
  };

  const deleteTask = (id) => {
    const taskDeleted = userTask.filter((task) => task.id !== id);
    setUserTask(taskDeleted);
  };

  const toggleCompletion = (id) => {
    console.log(id);

    const userTaskCompletion = userTask.map((task) =>
      task.id === id ? { ...task, taskCompleted: !task.taskCompleted } : task
    );
    setUserTask(userTaskCompletion);
  };

  return (
    <>
      <TasksMethods.Provider
        value={{ userTask, addTask, deleteTask, toggleCompletion }}
      >
        {children}
      </TasksMethods.Provider>
    </>
  );
};

export default TaskListProvider;
