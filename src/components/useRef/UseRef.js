import React, { useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const useCount = useRef(null);
  function handleClick() {
    setCount((prev) => prev + 1);
    // useCount.current++;
    console.log("useCountuseCount", useCount);
    useCount.current.style.background = "green";
    if (useCount.current) {
      console.log(useCount.current.getBoundingClientRect().top);
    }
  }
  var inner = 20;
  {
    var inner = 30;
    console.log("inner inside", inner);
  }

  console.log("inner outside", inner);

  console.log("Start");

  //   function cb() {
  //     console.log("timer outside");
  //   }

  //   cb();
  setTimeout(function cb() {
    console.log("timer");
  }, 0);

  console.log("End");
  //   let startTime = new Date().getTime();
  //   let endTime = startTime;

  //   while (endTime < startTime + 10000) {
  //     endTime = new Date().getTime();
  //   }

  //   console.log("startTimestartTime", startTime);
  return (
    <div>
      UseRef
      <h1>{count}</h1>
      <button ref={useCount} onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}

export default UseRef;
