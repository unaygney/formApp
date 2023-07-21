import { useEffect ,useContext } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TaskContext from "./context/Task";


function App() {
 
  const {fetchData} = useContext(TaskContext);

  useEffect(() => {
    fetchData()
    
  }, [])
  

  return (
    <div>
      <TaskCreate/>
      <h2>Tasks</h2>
      <TaskList/>
    </div>
  );
}

export default App;
