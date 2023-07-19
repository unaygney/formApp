import TaskShow from './TaskShow'

function TaskList({ tasks, onDelete}) {
  return (
    <div className='tasks'>
        {tasks.map((task , idx) => {
            return <TaskShow onDelete={onDelete} task = {task} key={idx} />
            
        })}
    </div>
  );
}

export default TaskList;
