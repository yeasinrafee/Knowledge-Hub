import React, { useEffect, useState } from "react";
import BookmarkedBlog from "../BookmarkedBlog/BookmarkedBlog";

const Sidebar = ({ readingTime, titleContainer, count, bookmark }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const getTimeLocalStorage = localStorage.getItem("readingTime");
    setTime(getTimeLocalStorage);
  }, [readingTime]);

  return (
    <div className="my-9">
      <div className="px-9 py-5 border border-blue-600 rounded-md bg-purple-100 text-lg">
        {time ? (
          <p className="font-bold text-blue-600">
            Spent time on read: {time} min
          </p>
        ) : (
          <p className="font-bold text-blue-600">Spent time on read: 0 min</p>
        )}
      </div>
      <BookmarkedBlog
        titleContainer={titleContainer}
        count={count}
        bookmark={bookmark}
      />
    </div>
  );
};

export default Sidebar;
