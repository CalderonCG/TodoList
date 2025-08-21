import { useReducer} from "react";
import Form from "../Form/Form";
import List from "../List/List";
import "./Container.scss";
import { MdSunny } from "react-icons/md";
import type { ActionType, TaskType } from "../../utils/TaskTypes";


const listReducer = (state: TaskType[], action: ActionType): TaskType[] =>{
  switch (action.type) {
    case 'add':
      return [...state, action.value]
    case 'toggle':
      return state.map((task) => task.id === action.value ? {...task, completed: !task.completed} : task)
    default:
      return state
  }
}
function Container() {
  //const [list, setList] = useState<TaskType[]>([]);
  const [list, dispatch] = useReducer(listReducer, [] )


  return (
    <div className="todo_container">
      <div className="todo_container_header">
        <h1>TODO</h1>
        <MdSunny className="todo_container_icon" />
      </div>
      <Form handleNewTask={dispatch} />
      <List list={list} handleToggle={dispatch}/>
    </div>
  );
}

export default Container;
