import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  

  const createTask = async (title, desc) => {
    const response = await axios.post("http://localhost:5170/tasks", {
      title,
      desc,
    });
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };
  const deleteTask =  async(id) => {
    const response = await axios.delete(`http://localhost:5170/tasks/${id}`)
    const tasksAfterDeleting = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksAfterDeleting);
  };
  const fetchData = async () => {
    const response = await axios.get('http://localhost:5170/tasks')
    setTasks(response.data)
  }


  useEffect(() => {
    fetchData()
    
  }, [])
  

  return (
    <div>
      <TaskCreate onCreate={createTask} />
      <h2>Tasks</h2>
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
