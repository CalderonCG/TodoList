import Form from '../Form/Form';
import List from '../List/List';
import './Container.scss'
import { MdSunny } from "react-icons/md";

function Container() {
  return (
    <div className="todo_container">
        <div className='todo_container_header'>
            <h1>TODO</h1>
            <MdSunny className='todo_container_icon'/>
        </div>
        <Form/>
        <List/>
    </div>
  )
}

export default Container