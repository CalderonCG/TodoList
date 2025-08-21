import type { TaskType } from '../../utils/TaskTypes'
import './Task.scss'

function Task({task}: {task:TaskType}) {
  return (
    <div className="task">
        <button className='task_check'></button>
        <p className='task_task'>{task.task}</p>
        <p className='task_deadline'>{task.deadline}</p>
        <p className='task_priority'>{task.priority}</p>
    </div>
  )
}

export default Task