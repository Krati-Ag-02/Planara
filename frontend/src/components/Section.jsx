import TaskCard from "./TaskCard";

function Section({ title, tasks, setTasks }) {
  return (
    <div className="section">
      <h2>{title}</h2>

      {tasks.length === 0 ? (
        <p className="empty">No tasks here</p>
      ) : (
        tasks.map(task => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} />
        ))
      )}
    </div>
  );
}

export default Section;