import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./SearchFilter.css";
import { fetchUsers } from "../redux/ActionCreater";
function SearchFilter() {
  let timer;
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.counterReducer);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  function filterDebounce() {
    console.log("Debouncing");
    setFilterData(
      userData.filter((curr) =>
        curr.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
  //   useEffect(() => {
  //     filterDebounce();
  //   }, [searchTerm]);

  console.log("countercounter in search filter", searchTerm);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => {
      filterDebounce();
    }, 5000);
  }
  return (
    <div>
      SearchFilter
      <input value={searchTerm} name="searchTerm" onChange={handleChange} />
      <div className="search-list">
        {filterData.length > 0 &&
          filterData.map((curr) => <div>{curr.name}</div>)}
      </div>
    </div>
  );
}

export default SearchFilter;
