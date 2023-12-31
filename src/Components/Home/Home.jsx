import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Home = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setBlogs(data);
    };
    loadData();
  }, []);

  return (
    <div className="w-full">
      {blogs.map((blog) => (
        <SingleBlog
          blog={blog}
          key={blog.id}
          handleReadingTime={props.handleReadingTime}
          getTitle={props.getTitle}
        />
      ))}
    </div>
  );
};

export default Home;
