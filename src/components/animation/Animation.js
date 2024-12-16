import React, { useEffect } from "react";

function Animation() {
  useEffect(() => {
    const handleScroll = () => {
      // console.log("height", window.innerHeight);
      const height = window.innerHeight;
      document.querySelectorAll(".box").forEach((element) => {
        console.log(element, "element");
        const boxTop = element.getBoundingClientRect().top;
        console.log("boxTop", boxTop);
        if (boxTop < height) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
      // console.log("boxDoc", boxDoc);
      // const boxTop =
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {" "}
      <h1 className="heading1">Box animation</h1>
      <div className="parent" style={{ padding: "20px" }}>
        Parent
        <div className="child-one">One</div>
        <div className="child-two">Two</div>
        <div className="child-three">Three</div>
      </div>
      <div className="box-animate">
        {Array.from({ length: 24 }).map((curr, indx) => (
          <div className="box" key={indx}>
            Box
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animation;
