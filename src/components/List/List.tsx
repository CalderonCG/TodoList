import { useState } from "react";
import type { ActionType, TaskType } from "../../utils/TaskTypes";
import Filter from "../Filter/Filter";
import Task from "../Task/Task";
import "./List.scss";
import Sorter from "../Sorter/Sorter";
import { sortList } from "../../utils/Sorting";
import Modal from "../Modal/Modal";

//Types---------------------------------------------------------
type ListProps = {
  list: TaskType[];
  handleChanges: React.ActionDispatch<[action: ActionType]>;
};

function List({ list, handleChanges }: ListProps) {
  //States and consts-----------------------------------------------------------
  const uncompleted = list.filter((task) => !task.completed); //List of uncompleted tasks
  const [sorter, setSorter] = useState<'Added'|'Priority'|'Status'|'Deadline'>("Added"); //Selected sort option
  const [statusFilter, setStatusFilter] = useState("All");//Selected status filter
  const [priorityFilter, setPriorityFilter] = useState("All");//Selected priority filter
  const statusOptions = ["All", "Completed", "Pending"];//Possible status filter options
  const priorityOptions = ["All", "High", "Medium", "Low"];//Possible priority filter options
  const [showModal, setShowModal] = useState(false);


  //Applying filters-------------------------
  const filteredList = list.filter((task) => {
    //Checking the status
    const statusCheck =
      statusFilter === "All" ||
      (statusFilter === "Completed" && task.completed) ||
      (statusFilter === "Pending" && !task.completed);

    //Checking hte priority
    const priorityCheck =
      priorityFilter === "All" || priorityFilter === task.priority;
    return priorityCheck && statusCheck;
  });

  //Applying sorting to the filteres list------------------------
  const sortedList =  sortList({filter:sorter, list: filteredList})


  //Component--------------------------------------------------------------------------------------
  return (
    <div className="todo_list">
      {list.length === 0 ? (
        <div className="todo_list_empty">No tasks added yet</div>
      ) : (
        <>
          <div className="todo_list_tasks">
            {sortedList.map((task) => (
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
              <Sorter value={sorter} handleChange={setSorter} />
            </div>
            <button className="todo_list_options_button" onClick={()=>setShowModal(true)}>Options</button>
            <button
              className="todo_list_options_clear"
              onClick={() => handleChanges({ type: "clear" })}
            >
              Clear Completed
            </button>
          </div>
          <Modal show={showModal} handleClick={setShowModal}/>
        </>
      )}
    </div>
  );
}

export default List;
