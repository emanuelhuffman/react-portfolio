import LogForm from "./LogForm";

function EditModal() {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <h3>Edit Log</h3>
        <LogForm />
      </div>
    </div>
  );
}

export default EditModal;
