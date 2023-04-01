import React, { useState } from "react";

const SingleBlog = (props) => {
  const { name, title, image, author_image, read_time, publish_date } =
    props.blog;
  const [bookMarked, setBookMarked] = useState(false);
  const [count, setCount] = useState(0);

  const handleBookmark = () => {
    setBookMarked(true);
    setCount(count + 1);
    props.getTitle(title, count);
  };

  return (
    <div className="my-9">
      <img className="w-4/5 h-96 rounded-lg mx-auto" src={image} alt="" />
      <div className="mx-5 md:mx-28 my-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <img className="w-16 h-16" src={author_image} alt="" />
            <div className="text-left">
              <h3 className="font-bold text-xl">{name}</h3>
              <p className="text-xs text-gray-600">{publish_date}</p>
            </div>
          </div>
          <p className="text-gray-600 flex gap-2">
            {read_time} min read{" "}
            <span onClick={handleBookmark} className="cursor-pointer">
              {bookMarked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              )}
            </span>
          </p>
        </div>
      </div>
      <div className="text-left mx-5 md:mx-28 my-8">
        <h1 className="font-bold text-3xl leading-relaxed mb-4">{title}</h1>
        <p className="mb-4 text-gray-500">
          <span className="mr-4">#beginner</span> <span>#programming</span>
        </p>
        <p
          onClick={() => props.handleReadingTime(+read_time)}
          className="text-blue-600 font-bold underline cursor-pointer"
        >
          Mark as read
        </p>
      </div>
      <hr />
    </div>
  );
};

export default SingleBlog;
