import "./App.css";
import Animation from "./components/animation/Animation";
import Accordian from "./components/accordian/Accordian";
import RandemColor from "./components/randem-color/RandemColor";
import HoverStar from "./components/HoverStar/HoverStar";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/loadmorebutton/LoadMore";
import TreeView from "./components/tree-view/TreeView";

function App() {
  return (
    <>
      {/* <Animation /> */}
      {/* <Accordian /> */}
      <RandemColor />
      <HoverStar />
      {/* <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="1" /> */}
      {/* <LoadMore /> */}
      <TreeView />
    </>
  );
}
export default App;
