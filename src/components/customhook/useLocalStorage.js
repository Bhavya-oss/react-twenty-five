import React, { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [name, setName] = useState(
    localStorage.getItem("userName") ? localStorage.getItem(key) : initialValue
  );
  useEffect(() => localStorage.setItem(key, name), [name, key]);
  return [name, setName];
}

export default useLocalStorage;