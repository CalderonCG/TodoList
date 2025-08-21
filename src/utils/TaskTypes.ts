export type TaskType = {
  id: string;
  task: string;
  deadline: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
};


export type ActionType = {type: 'toggle', value: string} | {type: 'add', value: TaskType}  | {type: 'clear'}