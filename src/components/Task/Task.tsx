import './Task.scss'

function Task() {
  return (
    <div className="task">
        <button className='task_check'></button>
        <p className='task_task'>Task info</p>
        <p className='task_deadline'>23/05/2026</p>
        <p className='task_priority'>High</p>
    </div>
  )
}

export default Task