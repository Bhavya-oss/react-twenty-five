import React, { useEffect, useState } from "react";
import AddEditDelete from "./AddEditDelete";
import Modal from "./Modal";

function MainTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    if (data) {
      setTableData(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function handleDeleteRow(id) {
    setTableData((prev) => prev.filter((cuur) => cuur.id !== id));
  }

  function handleEditRow(id) {
    // setTableData((prev) =>
    //   prev.map((curr) => (curr.id === id ? formData : [...tableData]))
    // );
  }

  function handleSubmit(formData) {
    setTableData([...tableData, formData]);
  }
  return (
    <div>
      <AddEditDelete tableData={tableData} handleDeleteRow={handleDeleteRow} />
      <button onClick={() => setIsModalOpen(true)}>Add</button>
      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          tableData={tableData}
          setTableData={setTableData}
          submit={handleSubmit}
          handleEditRow={handleEditRow}
        />
      )}
    </div>
  );
}

export default MainTable;
