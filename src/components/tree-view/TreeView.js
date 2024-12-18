import React, { useState } from "react";
import "./TreeView.css";
import { TREE_VIEW } from "../../data";
function TreeView() {
  const [isChildren, setIsChildren] = useState(null);
  const [isInsideChild, setIsInsideChild] = useState(null);
  console.log("TREEV_VIEWTREEV_VIEW", TREE_VIEW);
  function handlChildrenClick(id) {
    setIsChildren((prev) => (prev === id ? null : id));
  }

  function handlChildrenInsideClick(id) {
    setIsInsideChild((prev) => (prev === id ? null : id));
  }
  return (
    <div className="tree-view-container">
      TreeView
      {TREE_VIEW.map((curr, indx) => {
        console.log("curr curr", curr);
        return (
          <>
            <div
              className="tree-view-label"
              key={indx}
              onClick={() => handlChildrenClick(indx)}
            >
              <div>{curr.label}</div>
              <div> {curr.children && <h1>+</h1>}</div>
            </div>
            {indx === isChildren &&
              curr.children &&
              curr.children.map((child, indx) => (
                <>
                  <div
                    onClick={() => handlChildrenInsideClick(indx)}
                    className="answer"
                  >
                    {child.label}
                    {console.log("childchild", child)}
                  </div>

                  <div>
                    {" "}
                    {indx === isInsideChild &&
                      child.children &&
                      child.children.map((inside, index) => (
                        <div className="inside">{inside.label}</div>
                      ))}
                  </div>
                </>
              ))}
          </>
        );
      })}
    </div>
  );
}

export default TreeView;
