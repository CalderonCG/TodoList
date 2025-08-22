import { useEffect, useRef, useState } from "react";
import "./Filter.scss";

type FilterProps = {
  name: string;
  value: string;
  options: string[];
  handleChange: React.Dispatch<React.SetStateAction<string>>;
};

function Filter({ name, options, value, handleChange }: FilterProps) {
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

  const handleSelection = (option: string) => {
    setShowMenu(false);
    handleChange(option);
  };
  return (
    <div className="filter " ref={menuRef}>
      <p className="filter_label">{name}: </p>
      <button className="filter_button" onClick={() => setShowMenu(!showMenu)}>
        <p>{value}</p>
      </button>
      <div className={`filter_menu ${showMenu ? "display" : ""}`}>
        {options.map((option) => (
          <button
            className={`${value === option ? "selected" : ""}`}
            onClick={() => handleSelection(option)}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
