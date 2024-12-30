import React, { useState } from "react";
import "./RandemColor.css";

function RandemColor() {
  const [startColor, setStartColor] = useState("pink");
  const [color, setColor] = useState();
  const [hexa, setHexa] = useState();
  // const [isRGB, setIsRGB] = useState();
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  function ColorRGB() {
    setColor(`rgb(${r}, ${g}, ${b})`);
    setStartColor("RGB");
  }

  function HexaDecimal() {
    // setHexa(
    //   `#${r.toString(16).padStart(2, 0)}${g.toString(16).padStart(2, 0)}${b
    //     .toString(16)
    //     .padStart(2, 0)}`
    // );
    const hexaLen = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexaColor = "#";
    for (let i = 0; i < 6; i++) {
      hexaColor =
        hexaColor + hexaLen[Math.floor(Math.random() * hexaLen.length)];
    }
    console.log("hexaColor", hexaColor);
    setHexa(hexaColor);
    setStartColor("HEXA");
  }

  let arr = ["a", "b"];
  console.log(arr);
  function Print() {
    console.log("Print");
  }
  console.log(typeof Print);
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor:
          startColor === "RGB"
            ? color
            : startColor === "HEXA"
            ? hexa
            : startColor,
      }}
    >
      RandemColor
      <button onClick={ColorRGB}>RGB </button>
      <button onClick={HexaDecimal}>Hexa</button>
    </div>
  );
}

export default RandemColor;
