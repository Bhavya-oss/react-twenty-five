import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchUsers, increment, reset } from "./ActionCreater";
import { Table } from "react-bootstrap";
function Counter() {
  const [fetchedData, setFetchedData] = useState([]);
  const dispatch = useDispatch();
  const { count, userData } = useSelector((state) => state.counterReducer);
  //   console.log("redux store count1", counter);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log("fetchusersfetchusers", count, userData);

  return (
    <div>
      Counter
      {count}
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(reset(0))}>Reset</button>
      <Table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 &&
            userData.map((curr) => (
              <tr>
                <th scope="row">{curr.id}</th>
                <td>{curr.name}</td>
                <td>{curr.email}</td>
                <td>{curr.phone}</td>
              </tr>
            ))}{" "}
        </tbody>
      </Table>{" "}
    </div>
  );
}

export default Counter;
