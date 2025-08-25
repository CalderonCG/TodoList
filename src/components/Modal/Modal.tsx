import "./Modal.scss";

type ModalProps = {
  show: boolean;
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ show, handleClick }: ModalProps) {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="background_modal" onClick={() => handleClick(false)} />
      <div className="modal">
        <p className="modal_title">Filters and sorting</p>
        <p className="modal_filter_title">Filter by status</p>
        <div className="modal_filter_list">
          <button className="modal_filter_button">All</button>
          <button className="modal_filter_button">Completed</button>
          <button className="modal_filter_button">Pending</button>
        </div>
        <p className="modal_filter_title">Filter by priority</p>
        <div className="modal_filter_list">
          <button className="modal_filter_button">All</button>
          <button className="modal_filter_button">High</button>
          <button className="modal_filter_button">Medium</button>
          <button className="modal_filter_button">Low</button>
        </div>
        
        <p className="modal_filter_title">Sort</p>
        <div className="modal_filter_list">
          <button className="modal_filter_button">Added</button>
          <button className="modal_filter_button">Priority</button>
          <button className="modal_filter_button">Status</button>
          <button className="modal_filter_button">Deadline</button>
        </div>

        <button className="modal_apply">Apply</button>
      </div>
    </>
  );
}

export default Modal;
