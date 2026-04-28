import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

function TaskForm({ setTasks }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/tasks", task);

    setTasks(prev => [...prev, res.data]);

    setTask({ title: "", description: "", priority: "low", dueDate: "" });
  };

  return (
    <motion.form
      className="form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <input placeholder="Task title..."
        value={task.title}
        onChange={e => setTask({ ...task, title: e.target.value })} />

      <input placeholder="Notes..."
        value={task.description}
        onChange={e => setTask({ ...task, description: e.target.value })} />

      <input type="date"
        onChange={e => setTask({ ...task, dueDate: e.target.value })} />

      <select onChange={e => setTask({ ...task, priority: e.target.value })}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">
        <FiPlus /> Add
      </button>
    </motion.form>
  );
}

export default TaskForm;