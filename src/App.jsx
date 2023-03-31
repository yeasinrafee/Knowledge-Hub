import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [readingTime, setReadingTime] = useState("");
  const [titleContainer, setTitleContainer] = useState([]);
  const [count, setCount] = useState();

  const handleReadingTime = (time) => {
    const previousReadingTime = JSON.parse(localStorage.getItem("readingTime"));

    if (previousReadingTime) {
      const totalTime = previousReadingTime + time;
      localStorage.setItem("readingTime", totalTime);
      setReadingTime(totalTime);
    } else {
      localStorage.setItem("readingTime", time);
      setReadingTime(time);
    }
  };

  const getTitle = (title, count) => {
    setTitleContainer([...titleContainer, title]);
    setCount(count);
  };

  return (
    <div className="App">
      <Header />
      <hr className="w-full" />
      <div className="main grid grid-cols-1 md:grid-cols-4 md:mx-64 text-center">
        <div className="home-container md:col-span-3">
          <Home handleReadingTime={handleReadingTime} getTitle={getTitle} />
        </div>
        <div className="sidebar-container md:col-span-1">
          <Sidebar
            readingTime={readingTime}
            titleContainer={titleContainer}
            count={count}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
