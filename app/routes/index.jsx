import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import Add from "../component/Add";
import styles from "../styles/task.css";
export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};
export default function Index() {
  const [AddSection, setAddSection] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, task: "First task", description: "Description 1", time: "1:00" },
    { id: 2, task: "Second task", description: "Description 2", time: "2:00" },
  ]);
  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };
  // Toggle add section
  const toggleShow = () => {
    setAddSection(!AddSection);
  };
  return (
    <div className="container">
      <header className="header">
        <h1>Todo Application</h1>
        <button
          className="btn"
          style={
            AddSection
              ? { backgroundColor: "red" }
              : { backgroundColor: "green" }
          }
          onClick={toggleShow}
        >
          {AddSection ? "Close" : "Add"}
        </button>
      </header>
      {AddSection && <Add onAdd={addTask} />}
      {tasks.length > 0 ? (
        <div className="task-section">
          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <h3 className="task-title">{task.task}</h3>
              <p className="task-description">{task.description}</p>
              <p className="task-time">{task.time}</p>
              <button
                className="delete-icon"
                onClick={() => deleteTask(task.id)}
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1>No Task</h1>
      )}
    </div>
  );
}
