import { useEffect } from "react";
import "./App.css";

function App() {
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
    <>
      <h1 className="heading1">Box animation</h1>

      <div className="box-animate">
        {Array.from({ length: 24 }).map((curr, indx) => (
          <div className="box" key={indx}>
            Box
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
