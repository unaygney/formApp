import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from './components/TaskList'


function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, desc) => {
    const createdTasks = [
      ...tasks,
      {
        title,
        desc,
        id: Math.round(Math.random() * 99999),
      }
    ];
    setTasks(createdTasks)

  };
 const deleteTask = (id) => {
const tasksAfterDeleting = tasks.filter((task) => {
return task.id !==id
})

setTasks(tasksAfterDeleting)
 }

  return (
    <div>
      <TaskCreate onCreate={createTask} />
      <h2>Tasks</h2>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
