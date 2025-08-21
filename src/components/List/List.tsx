import { useState } from "react";
import type { ActionType, TaskType } from "../../utils/TaskTypes";
import Filter from "../Filter/Filter";
import Task from "../Task/Task";
import "./List.scss";

type ListProps = {
  list: TaskType[];
  handleChanges: React.ActionDispatch<[action: ActionType]>;
};

function List({ list, handleChanges }: ListProps) {
  const uncompleted = list.filter((task) => !task.completed);
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const statusOptions = ["All", "Completed"];
  const priorityOptions = ["All", "High", "Medium", "Low"];
  console.log(priorityFilter);

  return (
    <div className="todo_list">
      {list.length === 0 ? (
        <div className="todo_list_empty">No tasks added yet</div>
      ) : (
        <>
          <div className="todo_list_tasks">
            {list.map((task) => (
              <Task task={task} key={task.id} handleToggle={handleChanges} />
            ))}
          </div>

          <div className="todo_list_options">
            <p>{uncompleted.length} items left</p>
            <div className="todo_list_options_filters">
              <Filter
                name="Status"
                value={statusFilter}
                options={statusOptions}
                handleChange={setStatusFilter}
              />
              <Filter
                name="Priority"
                value={priorityFilter}
                options={priorityOptions}
                handleChange={setPriorityFilter}
              />
            </div>
            <button
              className="todo_list_options_clear"
              onClick={() => handleChanges({ type: "clear" })}
            >
              Clear Completed
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default List;
