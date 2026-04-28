import Section from "./Section";

function TaskList({ tasks, setTasks }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <Section title="Today's Plan"
        tasks={tasks.filter(t => t.dueDate === today)}
        setTasks={setTasks} />

      <Section title="Important Tasks"
        tasks={tasks.filter(t => t.priority === "high")}
        setTasks={setTasks} />

      <Section title="Quick Tasks"
        tasks={tasks.filter(t => t.priority === "low")}
        setTasks={setTasks} />
    </>
  );
}

export default TaskList;