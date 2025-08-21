import type { TaskType } from "../../utils/TaskTypes";
import Task from "../Task/Task";
import "./List.scss";

function List({ list }: { list: TaskType[] }) {
  const uncompleted = list.filter((task) => !task.completed)
  return (
    <div className="todo_list">
      {list.length === 0 ? (
        <div className="todo_list_empty">No tasks added yet</div>
      ) : (
        <>
          <div className="todo_list_tasks">
            {list.map((task) => (
              <Task task={task} key={task.id}/>
            ))}
          </div>

          <div className="todo_list_options">
            <p>{uncompleted.length} items left</p>
            <div className="todo_list_options_filters">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <p>Clear Completed</p>
          </div>
        </>
      )}
    </div>
  );
}

export default List;
