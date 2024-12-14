import React, { useState } from "react";
import "./Accordian.css";
import { ACCORDIAN_DATA } from "../../data";
function Accordian() {
  const [isAnswerVisible, setIsAnswerVisible] = useState(null);
  const [isMultiSelection, setIsMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);
  const handleClick = (id) => {
    console.log("data", id);

    setIsAnswerVisible(isAnswerVisible === id ? null : id);
  };

  const handleMultiSelect = (id) => {
    const copiedMultiSelect = [...multiSelected];
    const indexOfId = copiedMultiSelect.indexOf(id);
    if (indexOfId === -1) {
      copiedMultiSelect.push(id);
    } else {
      copiedMultiSelect.splice(indexOfId, 1);
    }
    setMultiSelected(copiedMultiSelect);
  };

  //   console.log("isMultiSelectionisMultiSelection", isMultiSelection);
  return (
    <div className="accordian accordian-center">
      {" "}
      Accordian
      <div className="text-center">
        {" "}
        <button onClick={() => setIsMultiSelection(!isMultiSelection)}>
          Enable Multi Selection
        </button>
      </div>
      <div>
        {" "}
        {ACCORDIAN_DATA &&
          ACCORDIAN_DATA.length > 0 &&
          ACCORDIAN_DATA.map((curr) => (
            <div className="accordian-bg color-white " key={curr.id}>
              <h4
                className="pb-6 cursor-pointer"
                onClick={() =>
                  isMultiSelection
                    ? handleMultiSelect(curr.id)
                    : handleClick(curr.id)
                }
              >
                {curr.question}
              </h4>
              {isAnswerVisible === curr.id ||
              multiSelected.indexOf(curr.id) !== -1 ? (
                <p>{curr.answer}</p>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Accordian;
