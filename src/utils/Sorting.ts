import type { TaskType } from "./TaskTypes";

//Types-----------------------------------
type SortArgs = {
  filter: "Added" | "Priority" | "Status" | "Deadline";
  list: TaskType[];
};

//Function------------
export const sortList = ({ filter, list }: SortArgs): TaskType[] => {
    //Assigns a numeric value depending on the priority
  const priorityOrder: Record<string, number> = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  //Sorting list
  const sortedList = [...list].sort((a, b) => {
    switch (filter) {
      case "Status": //The completed elements will display before the pending ones
        return Number(b.completed) - Number(a.completed);
      case "Deadline": //The upcoming elements will be displayed first
        return Number(a.deadline.replaceAll('-','')) - Number(b.deadline.replaceAll('-',''));
      case "Priority": //The higher priority elements will be displayed first
        return priorityOrder[a.priority] - priorityOrder[b.priority]
      default://The task will be sorted as they were added
        return 0;
    }
  });

  return sortedList;
};
