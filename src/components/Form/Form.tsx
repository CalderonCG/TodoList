import { useForm, type SubmitHandler } from "react-hook-form";
import "./Form.scss";
import { IoMdSend } from "react-icons/io";

type FormFields = {
  task: string;
  deadline: string;
  priority: "High" | "Medium" | "Low";
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
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
        <button ><IoMdSend className="submit"/></button>
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
