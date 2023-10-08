export default function Modal({ children, onClose }) {

    function handleClose(e) {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }
  
    return (
      <div className="modal" onClick={handleClose}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    );
  
  }