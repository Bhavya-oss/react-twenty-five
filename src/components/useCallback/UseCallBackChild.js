import React from "react";

function UseCallBackChild({ funtoChild }) {
  console.log("UseCallBackChild");
  return (
    <div>
      UseCallBackChild
      <button onClick={funtoChild}>Click</button>
    </div>
  );
}

export default React.memo(UseCallBackChild);
