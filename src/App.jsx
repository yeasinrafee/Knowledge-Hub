import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [readingTime, setReadingTime] = useState("");

  const handleReadingTime = (time) => {
    console.log(time);
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

  return (
    <div className="App">
      <Header />
      <hr className="w-full" />
      <div className="main grid grid-cols-1 md:grid-cols-4 md:mx-64 text-center">
        <div className="home-container md:col-span-3">
          <Home handleReadingTime={handleReadingTime} />
        </div>
        <div className="sidebar-container md:col-span-1">
          <Sidebar readingTime={readingTime} />
        </div>
      </div>
    </div>
  );
}

export default App;
