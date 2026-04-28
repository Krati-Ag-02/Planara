import { FiTrash2, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import axios from "axios";

function TaskCard({ task, setTasks }) {

  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/tasks/${task.id}`);
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  const toggleComplete = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
  <motion.div className={`card ${task.priority}`}>

    <div className="card-content">
      <h3 className={task.completed ? "done" : ""}>{task.title}</h3>
      <p>{task.description}</p>
      <div className="meta">{task.dueDate}</div>
    </div>

    <div className="actions">
      <FiCheckCircle onClick={toggleComplete} />
      <FiTrash2 onClick={deleteTask} />
    </div>

  </motion.div>
);
}

export default TaskCard;