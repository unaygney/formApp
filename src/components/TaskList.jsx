import TaskContext from '../context/Task';
import TaskShow from './TaskShow'
import { useContext } from 'react';


function TaskList() {

  const {tasks} = useContext(TaskContext)


  return (
    <div className='tasks'>
        {tasks.map((task , idx) => {
            return <TaskShow key={idx} task={task}  />
            
        })}
    </div>
  );
}

export default TaskList;
