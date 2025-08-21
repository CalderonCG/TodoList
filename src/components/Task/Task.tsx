import { FaCheck } from "react-icons/fa";
import type { ActionType, TaskType } from "../../utils/TaskTypes";
import "./Task.scss";

type TaskProps = {
  task: TaskType;
  handleToggle: React.ActionDispatch<[action: ActionType]>;
};

function Task({ task, handleToggle }: TaskProps) {
  return (
    <div className={`task ${task.completed? 'checked_text':''}`}>
      <button className={`task_check ${task.completed? 'checked':''}`} onClick={()=>handleToggle({type:'toggle' , value:task.id})}>
        {task.completed && <FaCheck/>}
      </button>
      <p className="task_task">{task.task}</p>
      <p className="task_deadline">{task.deadline}</p>
      <p className="task_priority">{task.priority}</p>
    </div>
  );
}

export default Task;
