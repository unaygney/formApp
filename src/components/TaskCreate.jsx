import { useState } from "react";
import { useContext } from "react";
import TaskContext from "../context/Task";

function TaskCreate({task}) {

  const {createTask} = useContext(TaskContext)

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(title , desc)
  };

  return (
    <div className="task-create">
      <h3>Add A Task</h3>

      <form onSubmit={handleSubmit} className="form">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Enter Task!</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          cols="30"
          rows="5"
        ></textarea>
        <button type="submit" className="btn">
          Create
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
