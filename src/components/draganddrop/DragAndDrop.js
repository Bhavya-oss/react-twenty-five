import React, { useState } from "react";
import "./DragAndDrop.css";
function DragAndDrop() {
  const [todo, setTodo] = useState("");
  const TODO = ["Todo 1", "ToDo 2", "ToDo 3", "ToDo 4", "ToDo 5"];

  const [content, setContent] = useState([...TODO]);
  function handleChange(e) {
    e.preventDefault();
    setTodo(e.target.value);
  }

  var shadowing = 20;
  function handleSubmit(e) {
    e.preventDefault();
    setContent([...content, todo]);
    console.log("todotodo", todo);
    setTodo("");
  }
  function x() {
    let a = 10;
    function y() {
      console.log(a);
    }
    y();
  }

  console.log("clouser", x());
  return (
    <div>
      <div className="todo-box">Box Todo</div>
      DragAndDrop
      <form onSubmit={handleSubmit}>
        <input name="todo" type="text" value={todo} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <div>
        {content.map((curr, index) => (
          <div className="todo-list" key={index}>
            {curr}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragAndDrop;
