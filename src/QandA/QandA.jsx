import React from "react";

const QandA = () => {
  return (
    <div className="my-9 mx-80">
      <h1 className="font-bold text-3xl leading-relaxed mb-4">
        Questions and Answers:
      </h1>
      <div className="md:w-3/5 ml-4 mb-5">
        <p className="text-lg">
          <span className="font-bold text-xl">Que: </span>Props vs state?
        </p>
        <p className="text-lg">
          <span className="font-bold text-xl">Ans: </span>If we pass any value
          from one component to another component then it'll move as a object
          property, which we can destructure and use but we can't change. State
          is which we declare locally and we can modify or update its value.
        </p>
      </div>

      <div className="md:w-3/5 ml-4 mb-5">
        <p className="text-lg">
          <span className="font-bold text-xl">Que: </span>How does useState
          work?
        </p>
        <p className="text-lg">
          <span className="font-bold text-xl">Ans: </span>useState is a React
          hook. It returns an array and that array have two values. One is the
          current state value and another one is a function by which we can
          change or update the state value. It takes an initial value as an
          argument.
        </p>
      </div>

      <div className="md:w-3/5 ml-4 mb-5">
        <p className="text-lg">
          <span className="font-bold text-xl">Que: </span>Purpose of useEffect
          other than fetching data.
        </p>
        <p className="text-lg">
          <span className="font-bold text-xl">Ans: </span>The main purpose of
          use the useEffect hook is handle the side effects in the components.
          For changing the data if anything happen or we just need to render
          anything for changing a particular state or data, on that time we can
          use the useEffect hook.
        </p>
      </div>

      <div className="md:w-3/5 ml-4 mb-5">
        <p className="text-lg">
          <span className="font-bold text-xl">Que: </span>How Does React work?
        </p>
        <p className="text-lg">
          <span className="font-bold text-xl">Ans: </span>React is a javascript
          library. By using reactJS we can divides our UI into reusable
          components. We can use similar in looks different in data theory. Like
          if the looks is same then we can create one component and use it more
          than one time for different data. React components can take arbitrary
          inputs which called properties or props.
        </p>
      </div>
    </div>
  );
};

export default QandA;
