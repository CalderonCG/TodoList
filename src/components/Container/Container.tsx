import { useState } from "react";
import Form from "../Form/Form";
import List from "../List/List";
import "./Container.scss";
import { MdSunny } from "react-icons/md";
import type { TaskType } from "../../utils/TaskTypes";

//Types ------------------------------------------


function Container() {
  const [list, setList] = useState<TaskType[]>([]);



  return (
    <div className="todo_container">
      <div className="todo_container_header">
        <h1>TODO</h1>
        <MdSunny className="todo_container_icon" />
      </div>
      <Form handleNewTask={setList} />
      <List list={list}/>
    </div>
  );
}

export default Container;
