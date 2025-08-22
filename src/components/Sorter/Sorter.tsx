import { useEffect, useRef, useState } from "react";
import "./Sorter.scss";

type SorterProps = {
  value: string;
  handleChange: React.Dispatch<
    React.SetStateAction<"Added" | "Priority" | "Status" | "Deadline">
  >;
};

function Sorter({ value, handleChange }: SorterProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Useref that controls when the user clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelection = (
    option: "Added" | "Priority" | "Status" | "Deadline"
  ) => {
    setShowMenu(false);
    handleChange(option);
  };

  return (
    <div className="sorter" ref={menuRef}>
      <p className="sorter_label">Sort: </p>
      <button className="sorter_button" onClick={() => setShowMenu(!showMenu)}>
        <p>{value}</p>
      </button>
      <div className={`sorter_menu ${showMenu ? "display" : ""}`}>
        <button
          className={`${value === "Added" ? "selected" : ""} `}
          onClick={() => handleSelection("Added")}
        >
          Added
        </button>
        <button
          className={`${value === "Priority" ? "selected" : ""} `}
          onClick={() => handleSelection("Priority")}
        >
          Priority
        </button>
        <button
          className={`${value === "Status" ? "selected" : ""} `}
          onClick={() => handleSelection("Status")}
        >
          Status
        </button>
        <button
          className={`${value === "Deadline" ? "selected" : ""} `}
          onClick={() => handleSelection("Deadline")}
        >
          Deadline
        </button>
      </div>
    </div>
  );
}

export default Sorter;
