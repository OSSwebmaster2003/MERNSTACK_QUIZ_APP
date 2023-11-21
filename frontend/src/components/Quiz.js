import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion } from "../hooks/FetchQuestion";
import Questions from "./Questions";
import { movePrevAction } from "../redux/question_reducer";

function Quiz(props) {
  const { questions, result } = useSelector((state) => state);
  const trace = questions.trace;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(trace);
  });
  // next button event handler
  function onNext() {
    console.log("next question");
    dispatch(MoveNextQuestion());
  }

  // previous button event handler
  function onPrev() {
    console.log("Prev question");
    dispatch(movePrevAction());
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev} disabled={trace === 0}>
          Prev
        </button>
        <button
          className="btn next"
          onClick={onNext}
          disabled={trace > questions.queue.length - 2}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
