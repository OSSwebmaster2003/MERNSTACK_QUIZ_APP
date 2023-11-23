import React, { useEffect, useState } from "react";
// custom hook
import { useFetchQuestions } from "../hooks/FetchQuestion";
import { useSelector, useDispatch } from "react-redux";
import { UpdateResult } from "../hooks/SetResult";

function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestions();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.result.userId);
  const trace = useSelector((state) => state.questions.trace);
  const result = useSelector((state) => state.result.result);
  const questions = useSelector((state) => state.questions.queue);
  const question = questions && questions[trace];

  function onSelect(index) {
    onChecked(index);
    setChecked(index);
    dispatch(UpdateResult({ trace, checked }));
  }

  useEffect(() => {
    dispatch(UpdateResult({ trace, checked }));

    // eslint-disable-next-line
  }, [checked]);

  if (isLoading) {
    return <h3 className="text-light">Loading...</h3>;
  }
  if (serverError) {
    return <h3 className="text-light">Something wen wrong | Server Error</h3>;
  }
  return (
    <div className="questions">
      <h2 className="text-light">{question?.question}</h2>

      <ul key={question?.id}>
        {question?.options.map((question, index) => (
          <li key={index}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${index}-option`}
              onChange={() => onSelect(index)}
            />

            <label htmlFor={`q${index}-option`} className="text-primary">
              {question}
            </label>
            <div
              className={`check ${result[trace] === index ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
