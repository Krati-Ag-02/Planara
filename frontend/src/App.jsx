import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("theme1");

  useEffect(() => {
    fetch("https://task-manager-tkqn.onrender.com")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  return (
    <div className={`app ${theme}`}>
      <div className="page">

        <div className="header">
          <h1 className="title">My Planner</h1>
        </div>

        <ThemeSwitcher setTheme={setTheme} />

        <TaskForm setTasks={setTasks} />

        <div className="content">
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>

      </div>
    </div>
  );
}