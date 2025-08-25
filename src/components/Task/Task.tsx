import { FaCheck } from "react-icons/fa";
import type { ActionType, TaskType } from "../../utils/TaskTypes";
import "./Task.scss";
import clsx from "clsx";

type TaskProps = {
  task: TaskType;
  handleToggle: React.ActionDispatch<[action: ActionType]>;
};

function Task({ task, handleToggle }: TaskProps) {
  return (
    <div className={clsx("task", { checked_text: task.completed })}>
      {/* {`task_check ${task.completed? 'checked':''}`} onClick={()=>handleToggle({type:'toggle' , value:task.id})} */}
      <button
        className={clsx("task_check", { checked: task.completed })}
        onClick={() => handleToggle({ type: "toggle", value: task.id })}
      >
        {task.completed && <FaCheck />}
      </button>
      <p className="task_task">{task.task}</p>
      <p className="task_deadline">{task.deadline}</p>
      <p
        className={clsx("task_priority", {
          high: task.priority === "High" && !task.completed,
          medium: task.priority === "Medium" && !task.completed,
          low: task.priority === "Low" && !task.completed,
        })}
      >
        {task.priority}
      </p>
    </div>
  );
}

export default Task;
