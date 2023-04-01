import React from "react";

const BookmarkedBlog = ({ titleContainer, count, bookmark }) => {
  return (
    <div className="my-6 text-left p-7 bg-red-100 rounded-md">
      <h2 className="font-bold text-lg">Bookmarked Blogs: {count}</h2>
      {titleContainer &&
        titleContainer.map((title, index) => (
          <div key={index} className="p-6 bg-white rounded-md my-5">
            <h3 className="font-bold text-sm">{title}</h3>
          </div>
        ))}
    </div>
  );
};

export default BookmarkedBlog;
