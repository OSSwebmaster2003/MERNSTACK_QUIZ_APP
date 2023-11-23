import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/SetResult";
import Questions from "./Questions";
import { movePrevAction } from "../redux/question_reducer";

function Quiz(props) {
  const [checked, setChecked] = useState(undefined);
  const { questions, result } = useSelector((state) => state);
  const trace = questions.trace;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(result);
  });
  // next button event handler
  function onNext(optionValue) {
    if (trace < questions.queue.length) {
      dispatch(MoveNextQuestion());
      dispatch(PushAnswer(checked));
    }
  }

  // previous button event handler
  function onPrev() {
    dispatch(movePrevAction());
  }

  function onChecked(check) {
    setChecked(check);
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

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
