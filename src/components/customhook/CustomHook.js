import React from "react";
import useLocalStorage from "./useLocalStorage";

function CustomHook() {
  const [name, setName] = useLocalStorage("userName", " ");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  localStorage.clear();

  console.log("namename", localStorage.getItem("userName"));
  return (
    <div>
      CustomHook
      <input name="name" value={name} onChange={handleChange} />
      <h2>Name is {name}</h2>
    </div>
  );
}

export default CustomHook;
