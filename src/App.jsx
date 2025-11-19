import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import UserTaskForm from "./Components/UserTaskForm";
import TaskList from "./Components/TaskList";
import TaskListProvider from "./Store/TaskDataStorage";
import Tasks from "./Components/Tasks";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <>
      <TaskListProvider>
        <Header />
        {activeTab && (
          <AddTask activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        {!activeTab && (
          <UserTaskForm activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        <Tasks />
        <WelcomeMsg />
      </TaskListProvider>
    </>
  );
}

export default App;
