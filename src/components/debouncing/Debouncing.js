import React, { useEffect, useState } from "react";
import "./Debouncing.css";
function Debouncing() {
  const [count, setCount] = useState(0);
  let timer;
  const [search, setSearch] = useState("");
  const [fruits, setFruits] = useState([
    "apple",
    "mango",
    "orange",
    "banana",
    "guava",
    "avocado",
    "apple",
  ]);
  function handleSearch() {
    const searchedInput = fruits.filter((curr) =>
      curr.toLowerCase().includes(search.toLowerCase())
    );
    setFruits(searchedInput);

    console.log("searchedInputsearchedInput", searchedInput);
  }
  function handleChange(e) {
    setSearch(e.target.value);
    clearTimeout(timer);

    timer = setTimeout(() => {
      handleSearch();
    }, 300);
  }

  useEffect(() => {
    console.log("Count");
    let timer = setInterval(() => setCount((prev) => prev + 1), 1000);
    // return () => clearTimeout(timer);
    return () => clearInterval(timer);
  }, [count]);
  console.log("searchsearch", search, search);
  return (
    <div>
      Debouncing
      <h5>{count}</h5>
      <input name="search" value={search} type="text" onChange={handleChange} />
      <div>
        {fruits.map((curr, indx) => (
          <div key={indx} className="search-get">
            {curr}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Debouncing;
