import React from "react";
import "./AddEditDelete.css";
function AddEditDelete({ tableData, handleDeleteRow, handleEditRow }) {
  console.log("tableDatatableData", tableData);
  return (
    <div>
      AddEditDelete
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
        {tableData.length > 0 &&
          tableData &&
          tableData.map((curr, index) => (
            <tr key={curr.id}>
              <td>{curr.id}</td>
              <td>{curr.name}</td>
              <td>{curr.username}</td>
              <td>{curr.email}</td>
              <td onClick={() => handleDeleteRow(curr.id)}>delete</td>
              <td onClick={() => handleEditRow(curr.id)}>update</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default AddEditDelete;
