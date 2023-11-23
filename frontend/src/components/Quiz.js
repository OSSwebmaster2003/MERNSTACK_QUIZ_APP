import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { MoveNextQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/SetResult";
import Questions from "./Questions";
import { movePrevAction } from "../redux/question_reducer";

function Quiz(props) {
  const [checked, setChecked] = useState(undefined);
  const { questions, result } = useSelector((state) => state);
  const result_array = result && result.result;
  const trace = questions.trace;
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(result.result);
  });
  // next button event handler
  function onNext(optionValue) {
    if (trace < questions.queue.length - 1) {
      dispatch(MoveNextQuestion());
    }
    if (
      trace < questions.queue.length &&
      result_array &&
      result_array.length <= trace
    ) {
      dispatch(PushAnswer(checked));
    }

    // reset value of the checked variable
    setChecked(undefined);
  }

  // previous button event handler
  function onPrev() {
    if (trace > 0) {
      dispatch(movePrevAction());
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  // finish exam after last question

  if (result_array.length && result_array.length >= questions.queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
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
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
