import { useState } from "react";
import "./Sorter.scss";


type SorterProps = {
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<"Added" | "Priority" | "Status" | "Deadline">>;
};

function Sorter({value, handleChange}: SorterProps) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="sorter">
      <p className="sorter_label">Sort: </p>
      <button className="sorter_button" onClick={() => setShowMenu(!showMenu)}>
        <p>{value}</p>
      </button>
      <div className={`sorter_menu ${showMenu ? "display" : ""}`}>
        <button
          className={`${value === "Added" ? "selected" : ""} `}
          onClick={() => handleChange("Added")}
        >
          Added
        </button>
        <button
          className={`${value === "Priority" ? "selected" : ""} `}
          onClick={() => handleChange("Priority")}
        >
          Priority
        </button>
        <button
          className={`${value === "Status" ? "selected" : ""} `}
          onClick={() => handleChange("Status")}
        >
          Status
        </button>
        <button
          className={`${value === "Deadline" ? "selected" : ""} `}
          onClick={() => handleChange("Deadline")}
        >
          Deadline
        </button>
      </div>
    </div>
  );
}

export default Sorter;
