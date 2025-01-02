import React, { useState } from "react";

function Todo() {
  const [todoText, setTodoText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [error, setError] = useState("");
  const [updateTodoText, setUpDateTodoText] = useState();
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Orange" },

    { id: 4, name: "Parroat" },
    { id: 5, name: "Pickock" },
    { id: 6, name: "Crow" },
  ]);

  let generateId = () => Date.now() + Math.floor(Math.random() * 1000);
  function handleChange(e) {
    setTodoText(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();

    if (todoText.trim() === "") {
      setError("Please enter a todo item.");
      return;
    }

    setError(""); // Clear the error
    setTodoList([...todoList, { id: generateId(), name: todoText }]);
    setTodoText("");
  }

  function handleMoveToTop(indx) {
    setTodoList((prev) => {
      // Clone the array to avoid mutating the original state
      let updatedList = [...prev];

      if (indx > 0) {
        // Ensure the item can move up
        // Remove the item from the current position
        const item = updatedList.splice(indx, 1);
        // Insert it one position up
        updatedList.splice(indx - 1, 0, ...item);
      }

      return updatedList;
    });
  }

  function handleMoveBottom(indx) {
    setTodoList((prev) => {
      let updatedList = [...prev];
      if (indx < updatedList.length - 1) {
        const item = updatedList.splice(indx, 1);
        updatedList.splice(indx + 1, 0, ...item);
      }
      return updatedList;
    });
  }

  function handleEdit(id) {
    console.log("todoTexttodoText", todoText);
    let findedObj = todoList.find((curr) => curr.id === id);

    setUpDateTodoText(findedObj.name);
    // console.log("findedObjfindedObjfindedObj", updateTodoText);

    setUpdateId(id);
    setIsEdit(true);
  }
  console.log("findedObjfindedObjfindedObj", updateTodoText);

  let arr = [1, 2, 3, 4, 5];
  console.log(arr.splice(2, 1));
  console.log(arr);
  return (
    <div>
      Todo
      <input name="todoText" value={todoText} onChange={handleChange} />{" "}
      {error && <div>{error}</div>}
      {todoList.map((curr, index) => (
        <>
          {isEdit && updateId === curr.id && (
            <div>
              <input
                name="updateTodoText"
                value={updateTodoText}
                onChange={(e) => setUpDateTodoText(e.target.value)}
              />
              <button
                onClick={() => {
                  setTodoList((prev) =>
                    prev.map((data) =>
                      data.id === curr.id
                        ? { ...data, name: updateTodoText }
                        : data
                    )
                  );
                  setIsEdit(false);
                }}
              >
                Save
              </button>
            </div>
          )}{" "}
          <div key={curr.id}>
            {curr.id}
            {curr.name}{" "}
            <span
              onClick={() =>
                setTodoList((prev) =>
                  prev.filter((filt) => filt.id !== curr.id)
                )
              }
            >
              Delete
            </span>
            <span onClick={() => handleEdit(curr.id)}>Update</span>
            <button onClick={() => handleMoveToTop(index)}>MoveTaskUP</button>
            <button onClick={() => handleMoveBottom(index)}>MoveBottom</button>
          </div>
        </>
      ))}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Todo;
