import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const TaskContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, desc) => {
    const response = await axios.post("http://localhost:5170/tasks", {
      title,
      desc,
    });
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);

  };

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5170/tasks");
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    const response = await axios.delete(`http://localhost:5170/tasks/${id}`);
    const tasksAfterDeleting = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksAfterDeleting);
  };

  const sharedData = {
    tasks,
    createTask,
    deleteTask,
    fetchData,
    setTasks,
  };

  return (
    <TaskContext.Provider value={sharedData}>{children}</TaskContext.Provider>
  );
}
export default TaskContext;
export { Provider };
