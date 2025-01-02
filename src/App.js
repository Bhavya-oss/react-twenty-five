import "./App.css";
import Animation from "./components/animation/Animation";
import Accordian from "./components/accordian/Accordian";
import RandemColor from "./components/randem-color/RandemColor";
import HoverStar from "./components/HoverStar/HoverStar";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/loadmorebutton/LoadMore";
import TreeView from "./components/tree-view/TreeView";
import DragAndDrop from "./components/draganddrop/DragAndDrop";
import Debouncing from "./components/debouncing/Debouncing";
import UseRef from "./components/useRef/UseRef";
import Pagination from "./components/pagination/Pagination";
import Promises from "./components/promises/Promises";
import PromiseAPI from "./components/promise-api/PromiseAPI";
import UseMemo from "./components/usememo/UseMemo";
import UseCallBackParent from "./components/useCallback/UseCallBackParent";
import UseContextA from "./components/useCotext/UseContextA";
import UseContextB from "./components/useCotext/UseContextB";
import UseContextD from "./components/useCotext/UseContextD";
import { createContext, useState } from "react";
import UseReducer from "./components/useReducer/UseReducer";
import CustomHook from "./components/customhook/CustomHook";
import Post from "./components/HTTP/Post";
import MainTable from "./components/addeditdeleterow/MainTable";
import Todo from "./components/Todo/Todo";
import Counter from "./components/redux/Counter";
import SearchFilter from "./components/searchFilter/SearchFilter";
export const createdContext = createContext();

function App() {
  console.log("createdContextcreatedContext", createdContext);
  const [count, setCount] = useState(0);
  const counterData = {
    counter: 1000,
    count,
    setCount,
  };
  return (
    <>
      <createdContext.Provider value={counterData}>
        {/* <SearchFilter /> */}
        {/* <Counter /> */}
        {/* <Todo /> */}
        {/* <MainTable /> */}
        {/* <Animation /> */}
        <Accordian />
        <RandemColor />
        {/* <HoverStar /> */}
        <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="1" />
        {/* <LoadMore /> */}
        {/* <TreeView /> */}
        {/* <DragAndDrop /> */}
        {/* <Debouncing /> */}
        {/* <UseRef /> */}
        {/* <Pagination /> */}
        {/* <Promises /> */}
        {/* <PromiseAPI /> */}
        <UseMemo />
        {/* <UseCallBackParent /> */}
        <UseContextA />
        <UseContextB />
        <UseContextD />
        <UseReducer />
        <CustomHook />
        <Post />
      </createdContext.Provider>
    </>
  );
}
export default App;
