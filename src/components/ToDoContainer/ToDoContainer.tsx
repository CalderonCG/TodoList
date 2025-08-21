import ToDoForm from '../ToDoForm/ToDoForm';
import './ToDoContainer.scss'
import { MdSunny } from "react-icons/md";

function ToDoContainer() {
  return (
    <div className="todo_container">
        <div className='todo_container_header'>
            <h1>TODO</h1>
            <MdSunny className='todo_container_icon'/>
        </div>
        <ToDoForm/>
    </div>
  )
}

export default ToDoContainer