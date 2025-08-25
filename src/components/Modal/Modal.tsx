import { createPortal } from "react-dom";
import "./Modal.scss";
import type { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

//Types-------------------------------------------
type ModalProps = {
  show: boolean;
  sorter: "Added" | "Priority" | "Status" | "Deadline";
  status: string;
  priority: string;
  handleClick: Dispatch<SetStateAction<boolean>>;
  handleSort: Dispatch<
    SetStateAction<"Added" | "Priority" | "Status" | "Deadline">
  >;
  handleStatus: Dispatch<SetStateAction<string>>;
  handlePriority: Dispatch<SetStateAction<string>>;
};

//Component---------------------------------------------
function Modal({
  show,
  sorter,
  status,
  priority,
  handleClick,
  handleSort,
  handlePriority,
  handleStatus,
}: ModalProps) {
  //The modal is only rendered if show is true
  if (!show) {
    return null;
  }
  //This validates if the element in this component is not null, if it isn't then it creates the reference for the portal
  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;

  return createPortal(
    <>
      <div className="background_modal" onClick={() => handleClick(false)} />
      <div className="modal">
        <p className="modal_title">Filters and sorting</p>
        <p className="modal_filter_title">Filter by status</p>
        <div className="modal_filter_list">
          <button
            className={clsx("modal_filter_button", {
              active: status === "All",
            })}
            onClick={() => handleStatus("All")}
          >
            All
          </button>
          <button
            className={clsx("modal_filter_button", {
              active: status === "Completed",
            })}
            onClick={() => handleStatus("Completed")}
          >
            Completed
          </button>
          <button
            className={clsx("modal_filter_button", {
              active: status === "Pending",
            })}
            onClick={() => handleStatus("Pending")}
          >
            Pending
          </button>
        </div>
        <p className="modal_filter_title">Filter by priority</p>
        <div className="modal_filter_list">
          <button
            className={clsx("modal_filter_button", {
              active: priority === "All",
            })}
            onClick={() => handlePriority("All")}
          >
            All
          </button>
          <button
            className={clsx("modal_filter_button", {
              active: priority === "High",
            })}
            onClick={() => handlePriority("High")}
          >
            High
          </button>
          <button
            className={clsx("modal_filter_button", {
              active: priority === "Medium",
            })}
            onClick={() => handlePriority("Medium")}
          >
            Medium
          </button>
          <button
            className={clsx("modal_filter_button", {
              active: priority === "Low",
            })}
            onClick={() => handlePriority("Low")}
          >
            Low
          </button>
        </div>

        <p className="modal_filter_title">Sort</p>
        <div className="modal_filter_list">
          <button
            className={clsx("modal_filter_button", {
              active: sorter === "Added",
            })}
            onClick={() => handleSort("Added")}
          >
            Added
          </button>
          <button
            className={clsx("modal_filter_button", {
              active: sorter === "Priority",
            })}
            onClick={() => handleSort("Priority")}
          >
            Priority
          </button>
          <button
            className={clsx("modal_filter_button", {
              active: sorter === "Status",
            })}
            onClick={() => handleSort("Status")}
          >
            Status
          </button>
          <button
            className={clsx("modal_filter_button", {
              active: sorter === "Deadline",
            })}
            onClick={() => handleSort("Deadline")}
          >
            Deadline
          </button>
        </div>

        <button className="modal_apply" onClick={() => handleClick(false)}>
          Close
        </button>
      </div>
    </>,
    portalElement
  );
}

export default Modal;
