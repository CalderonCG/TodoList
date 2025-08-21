export type TaskType = {
  id: string;
  task: string;
  deadline: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
};