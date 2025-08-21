import './ToDoForm.scss'

function ToDoForm() {
  return (
    <div className='form'>
        <input className='form_task' placeholder='Write your task here' type="text" />
        <input type="date" className='form_deadline' />
        <select className='form_select' name="priority" id="priority">
            <option value="">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
    </div>
  )
}

export default ToDoForm