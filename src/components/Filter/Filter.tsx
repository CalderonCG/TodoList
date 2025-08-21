import { useState } from "react";
import "./Filter.scss";

type FilterProps = {
  name: string;
  value: string;
  options: string[];
  handleChange: React.Dispatch<React.SetStateAction<string>>;
};

function Filter({ name, options, value, handleChange }: FilterProps) {
  const [showMenu, setShowMenu] = useState(false);

  const handleSelection = (option: string) => {
    setShowMenu(false);
    handleChange(option)
  }
  return (
    <div className="filter">
      <button className="filter_button" onClick={() => setShowMenu(!showMenu)}>
        {name}
      </button>
      <div className={`filter_menu ${showMenu ? "display" : ""}`}>
        {options.map((option) => (
          <button className={`${value === option ? 'selected':''}`} onClick={()=>handleSelection(option)} key={option}>{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
