import { useForm, type SubmitHandler } from "react-hook-form";
import "./Form.scss";
import { IoMdSend } from "react-icons/io";
import type { TaskType } from "../../utils/TaskTypes";
import { v4 as uuidv4 } from "uuid";

type FormProps = {
  handleNewTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

function Form({ handleNewTask }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskType>();

  const onSubmit: SubmitHandler<TaskType> = (data) => {
    console.log(data);
    const newTask = { ...data, id: uuidv4(), completed: false };
    handleNewTask((prev) => {
      return [...prev, newTask];
    });
    reset();
  };

  return (
    <div className="form_container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("task", {
            required: true,
          })}
          className="form_task"
          placeholder="Write your task here"
          type="text"
        />
        <input
          {...register("deadline", { required: true })}
          type="date"
          className="form_deadline"
        />
        <select
          {...register("priority", { required: true })}
          className="form_select"
          name="priority"
          id="priority"
        >
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button>
          <IoMdSend className="submit" />
        </button>
      </form>

      {errors.deadline || errors.priority || errors.task ? (
        <p>Please complete all the fields</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Form;
