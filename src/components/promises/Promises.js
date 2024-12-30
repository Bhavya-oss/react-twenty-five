import React, { useEffect, useState, useRef } from "react";
import { BsReverseListColumnsReverse } from "react-icons/bs";

function Promises() {
  const [data, setData] = useState([]);
  const outerRef = useRef(null);
  useEffect(() => {
    const fetchData = fetch("https://dummyjson.com/products").then();
    console.log("fetchDatafetchData", fetchData);
    fetchData
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log("data data", data);
  useEffect(() => {
    document.querySelector("#outer").addEventListener(
      "click",
      function () {
        console.log("Outer");
      },
      true
    );

    document.querySelector("#middle").addEventListener(
      "click",
      function () {
        console.log("Middle");
      },
      true
    );

    document.querySelector("#inner").addEventListener(
      "click",
      function () {
        console.log("inner");
      },
      true
    );
  });

  //creating promises
  const promiseCreate = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
      resolve("Operation is successful");
    } else {
      reject("Operation is rejected");
    }
  });
  promiseCreate
    .then((result) => console.log("resultresult", result))
    .catch((error) => console.log("error", error));

  let arr = [1, 2, 3, 4, 5];

  return (
    <div>
      Promises
      <div id="outer" style={{ padding: "40px", backgroundColor: "pink" }}>
        <div id="middle" style={{ padding: "40px", backgroundColor: "blue" }}>
          <div
            id="inner"
            style={{ padding: "40px", backgroundColor: "red" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Promises;
