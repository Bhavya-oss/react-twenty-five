import React, { useState } from "react";
import "./AddEditDelete.css";

function Modal({ closeModal, submit }) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    userName: "",
    email: "",
  });

  function validate() {
    if (formData.id && formData.name && formData.userName && formData.email) {
      return true;
    } else {
      setError("Enter the required field");
      return false;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!validate());
    submit(formData);
    closeModal();
    console.log("submitted successfully");
  }

  console.log("tableDatatableData", formData);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <input name="id" value={formData.id} onChange={handleChange} />
          <input name="name" value={formData.name} onChange={handleChange} />
          <input
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <input name="email" value={formData.email} onChange={handleChange} />
          <h5>{error}</h5>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
