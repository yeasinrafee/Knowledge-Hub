import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QandA from "./Components/QandA/QandA";

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
    if (titleContainer.includes(title)) {
      toast("You Have Already Bookmarked This Blog");
    } else {
      // setTitleContainer([...titleContainer, title]);    // If we don't want to add more than one time
    }
    setTitleContainer([...titleContainer, title]); //If we want to add more than one time
    const previousCount = count;
    setCount(previousCount + 1);
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
      <ToastContainer></ToastContainer>
      <QandA />
    </div>
  );
}

export default App;
