import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function HoverStar() {
  const [clicked, setClicked] = useState(null);
  const [isHover, setIsHover] = useState(null);
  console.log("clicked index", clicked);
  return (
    <div>
      HoverStar
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3px",
          paddingBottom: "20px",
        }}
      >
        {Array.from({ length: 10 }).map((_, indx) => {
          //   indx = +1;
          return (
            <FaStar
              style={{
                cursor: "pointer",
                color:
                  (clicked !== null && indx <= clicked) || indx <= isHover
                    ? "gold"
                    : "black",
              }}
              onClick={() => {
                console.log("before");
                setClicked(indx);
                console.log("after");
              }}
              onMouseEnter={() => setIsHover(indx)}
              onMouseLeave={() => setIsHover(clicked)}
            />
          );
        })}
        {/* <p> {indx + 1}</p> */}
      </div>
      <p>
        {" "}
        {clicked != null ? clicked + 1 : isHover != null ? isHover + 1 : ""}
      </p>
    </div>
  );
}

export default HoverStar;
