function TaskShow({task , onDelete}) {
const handleDeleteClick = () => {
     onDelete(task.id)
}
    return ( 
        <div className="task-container">
            <h4 className="task-header">Your Task</h4>
            <p className="task">{task.title}</p>
            <h4 className="task-header">To Do</h4>
            <p className="task">{task.desc}</p>
            <button className="btn-delete" onClick={handleDeleteClick}>Delete</button>
        </div>
     );
}

export default TaskShow;