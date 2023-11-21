import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Questions from "./Questions";

function Quiz(props) {
  const { questions, result } = useSelector((state) => state);
  useEffect(() => {
    console.log(questions.queue);
  });
  // next button event handler
  function onNext() {
    console.log("Next question");
  }

  // previous button event handler
  function onPrev() {
    console.log("Prev question");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
