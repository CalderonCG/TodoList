import Task from "../Task/Task";
import "./List.scss";

function List() {
  return (
    <div className="todo_list">
      {/* <div className="todo_list_empty">No tasks added uet</div> */}

      <div className="todo_list_tasks">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      <div className="todo_list_options">
        <p>5 items left</p>
        <div className="todo_list_options_filters">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <p>Clear Completed</p>
      </div>
    </div>
  );
}

export default List;
