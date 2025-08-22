import { useEffect, useReducer } from "react";
import Form from "../Form/Form";
import List from "../List/List";
import "./Container.scss";
import { MdSunny } from "react-icons/md";
import type { ActionType, TaskType } from "../../utils/TaskTypes";

// Reducer that manages the updates to the list state
// 'add' adds a new task to the list
// 'toggle' switches the value of the completed property of a task
// 'clear' deletes all tasks with the completed property as true
const listReducer = (state: TaskType[], action: ActionType): TaskType[] => {
  switch (action.type) {
    case "add":
      return [...state, action.value];
    case "toggle":
      return state.map((task) =>
        task.id === action.value
          ? { ...task, completed: !task.completed }
          : task
      );
    case "clear":
      return state.filter((task) => task.completed !== true);
    default:
      return state;
  }
};

//Initial value of the list based on localStorage content
//I created a function for the reducer because this way it only gets calledon the first render
const init = () => {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list") || "")
    : [];
};

//Component--------------------------------------------------------------
function Container() {
  const [list, dispatch] = useReducer(listReducer, [], init);

  //Store changes in list in local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="todo_container">
      <div className="todo_container_header">
        <h1>TODO</h1>
        <MdSunny className="todo_container_icon" />
      </div>
      <Form handleNewTask={dispatch} />
      <List list={list} handleChanges={dispatch} />
    </div>
  );
}

export default Container;
