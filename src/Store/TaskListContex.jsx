import { createContext } from "react";

const defaultContext = {
  userTask: [],
  addTask: () => {},
  deleteTask: () => {},
  toggleCompletion: () => {},
};

export const TasksMethods = createContext(defaultContext);
